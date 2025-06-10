import { createClient } from 'stanza';

export const connectXMPP = ({ jid, password, onMessage }) => {
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
    console.log('XMPP Session started',jid);
  });


  client.on('message', (msg) => {
    if (msg.body) {
      onMessage(msg);
    }
  });

 
  client.connect();
  return client;
};
