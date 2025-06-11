import React, { useEffect, useState } from "react";

import bg from "../../assets/bg.jpg";

import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { connectXMPP } from "../sandesweb/stanzaClient";
import { useSelector } from "react-redux";

function ChatContainer() {

  const { jid, password, selectedUser } = useSelector((state) => state.user);
  const [client, setClient] = useState(null);

  const users = [
    { jid: "user1@localhost", name: "User One", image: "user1.png" },
    { jid: "user2@localhost", name: "User Two", image: "user2.png" },
  ];

  useEffect(() => {
    if (!jid || !password) return;

    const xmppClient = connectXMPP({
      jid,
      password,
      onMessage: (msg) => {
        // message logic here
      },
    });

    setClient(xmppClient);

    return () => xmppClient.disconnect();
  }, [jid, password]);

  return (
    <div
      className="flex items-center justify-center min-h-screen p-2 sm:p-6 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="w-full max-w-7xl h-full sm:h-[90vh] flex flex-col sm:flex-row shadow rounded-lg overflow-hidden border-1 border-gray-300">
        {/* Sidebar */}
        <Sidebar users={users} jid={jid} />

        <div className="w-px h-full bg-gray-300"></div>

        {/* Chat Window */}
        {selectedUser ? (
          <Chat
            users={[selectedUser]}
            jid={jid}
            password={password}
            to={selectedUser.jid}
          />
        ) : (
          <div className="h-full w-full flex flex-col items-center justify-center text-gray-500 text-4xl font-bold">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2462/2462719.png"
              alt="Start Conversation"
              className="w-40 h-40 mb-6 opacity-80"
            />
            Let's start conversation
          </div>

        )}
      </div>
    </div>
  );
}




export default ChatContainer;



