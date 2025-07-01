import { createClient } from 'stanza';
import { addNotification } from './redux/notificationSlice';
import { store } from './redux/store';
import { addMessage } from './redux/messageSlice';

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
    const fromJid = msg.from.split('/')[0];
    const toJid = msg.to?.split('/')[0];
    const currentUser = jid;
    const selectedUser = store.getState().user.selectedUser;


    

    const isFromMe = fromJid === currentUser;
    const otherJid = isFromMe ? toJid : fromJid;

    if (msg.body) {
      // ✅ Save message in Redux
      store.dispatch(
        addMessage({
          userJid: otherJid,
          message: {
            body: msg.body,
            fromMe: isFromMe,
             timestamp: new Date().toISOString(),
          },
        })
      );

      // ✅ Show notification if not current chat
      if (!selectedUser || selectedUser.jid !== fromJid) {
        store.dispatch(addNotification(fromJid));
      }

      // ✅ Optional: trigger callback
      onMessage?.(msg);
    }
  });

  client.connect();
  return client;
};