import { createClient } from 'stanza';

export const connectXMPP = ({ jid, password, onMessage, onPresence }) => {
  const client = createClient({
    jid,
    password,
    transports: {
      websocket: 'ws://localhost:5280/ws',
      bosh: false,
    },
  });

  client.on('session:started', () => {
    client.sendPresence();

    // Subscribe to presence of other users (excluding self)
    const allUsers = [
      "user1@localhost",
      "user2@localhost",
      "user3@localhost",
      "user4@localhost",
      "user5@localhost",
    ];

    allUsers.forEach((otherJid) => {
      if (otherJid !== jid) {
        client.sendPresence({ to: otherJid, type: 'subscribe' });
      }
    });

    console.log('✅ XMPP session started for:', jid);
  });

  // Auto-accept presence subscription requests
  client.on('subscribe', (pres) => {
    client.sendPresence({ to: pres.from, type: 'subscribed' });
    client.sendPresence({ to: pres.from, type: 'subscribe' }); // mutual subscribe
    console.log(`🔄 Auto-accepted and subscribed to ${pres.from}`);
  });

  // Listen to presence updates (online/offline)
  client.on('presence', (presence) => {
    if (onPresence) {
      const from = presence.from.split('/')[0];
      const isOnline = presence.type !== 'unavailable';
      onPresence(from, isOnline);
    }
  });

  // Handle incoming messages
  client.on('message', (msg) => {
    if (msg.body) {
      onMessage?.(msg);
    }
  });

  client.connect();
  return client;
};
