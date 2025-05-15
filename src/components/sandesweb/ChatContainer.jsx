import React from "react";

import bg from "../../assets/bg.jpg";

import Sidebar from "./Sidebar";
import Chat from "./Chat";

function ChatContainer() {
  const users = [
    {
      name: "Virat",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/ef/Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023.jpg",
    },
    {
      name: "Shreyas",
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQTlwWgDhpwPXCkXe8piQjXZzfMQh9aQrtPAblzDBwlp4WyO1znKRiXRsA45I2j9agVJH5mm_hYVAK9sRXtoym1pQ",
    },
    {
      name: "Bumrah",
      image: "https://documents.iplt20.com/ipl/IPLHeadshot2025/9.png",
    },
    {
      name: "Group 1",
      image:
        "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Group 2",
      image:
        "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div
      className="flex items-center justify-center min-h-screen p-2 sm:p-6 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="w-full max-w-7xl h-full sm:h-[90vh] flex flex-col sm:flex-row shadow rounded-lg overflow-hidden border-1 border-gray-300">
        {/* Sidebar */}
        <Sidebar users={users} />

        <div className="w-px h-full bg-gray-300"></div>

        {/* Chat Window */}
        <Chat users={users} />
      </div>
    </div>
  );
}

export default ChatContainer;
