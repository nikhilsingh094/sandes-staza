import { LogOut, Plus, Search } from "lucide-react";
import React, { useRef } from "react";
import EditProfile from "./EditProfile";
import chatbg from "../../assets/chat-bg.svg"

function ChatContainer() {
  const users = [
    {
      name: "Virat",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/ef/Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023.jpg",
    },
    {
      name: "Rohit",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/ef/Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023.jpg",
    },
    {
      name: "Sachine",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/ef/Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023.jpg",
    },
    {
      name: "Shreyas",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/ef/Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023.jpg",
    },
    {
      name: "Bumrah",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/ef/Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023.jpg",
    },
  ];

  const inputRef = useRef(null);
  const openFile = () => inputRef.current?.click();

  return (
    <div
      className="flex items-center justify-center min-h-screen p-2 sm:p-6 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${chatbg})`,
      }}
    >
      <div className="w-full max-w-7xl h-full sm:h-[90vh] flex flex-col sm:flex-row shadow rounded-lg overflow-hidden">
        {/* Sidebar */}
        <div className="bg-[#1D3557] w-full sm:w-[275px] flex flex-col">
          <div className="p-4">
            <div className="bg-white flex items-center gap-2 px-4 py-2 rounded-md border">
              <Search className="text-gray-600" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-transparent focus:outline-none text-gray-600 text-sm"
              />
            </div>
          </div>

          <hr className="h-[1px] bg-white border-0" />

          <div className="overflow-y-auto flex-grow px-4">
            {users.map((user, idx) => (
              <div key={idx} className="flex gap-3 items-center py-2">
                <img
                  src={user.image}
                  alt="user"
                  className="w-10 h-10 rounded-full"
                />
                <p className="text-white font-medium">{user.name}</p>
              </div>
            ))}
          </div>

          <div className="p-4">
            <div className="relative group">
              <button className="w-full bg-transparent border text-white py-2 px-4 rounded-md">
                Profile
              </button>
              <div className="absolute hidden group-focus-within:block group-hover:block bg-white text-black shadow-md rounded-md p-4 bottom-full mb-2 w-full z-10">
                <EditProfile />
                <button className="mt-4 flex items-center gap-2 border px-4 py-2 bg-[#1D3557] text-white rounded-md w-full">
                  <LogOut className="mr-2" /> Logout
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Window */}
        <div className="flex-1 flex flex-col bg-white">
          {/* Header */}
          <div className="bg-[#457B9D] text-white flex gap-3 p-4 items-center">
            <img
              src={users[0].image}
              alt="profile"
              className="w-10 h-10 rounded-full"
            />
            <p className="font-semibold">Username</p>
          </div>

          {/* Chat Messages */}
          <div className="flex-grow overflow-y-auto p-4 space-y-4">
            {[...Array(6)].map((_, i) => (
              <React.Fragment key={i}>
                <div className="flex items-start gap-2">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt="sender"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-semibold">
                      Obi-Wan Kenobi{" "}
                      <span className="text-xs text-gray-400 ml-2">12:45</span>
                    </p>
                    <div className="bg-gray-100 p-2 rounded-md mt-1">Hi!</div>
                    <p className="text-xs text-gray-400 mt-1">Delivered</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 justify-end">
                  <div className="text-right">
                    <p className="text-sm font-semibold">
                      Anakin{" "}
                      <span className="text-xs text-gray-400 ml-2">12:46</span>
                    </p>
                    <div className="bg-blue-100 p-2 rounded-md mt-1">
                      Hello!
                    </div>
                    <p className="text-xs text-gray-400 mt-1">Seen at 12:46</p>
                  </div>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt="receiver"
                    className="w-10 h-10 rounded-full"
                  />
                </div>
              </React.Fragment>
            ))}
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t flex items-center gap-2">
            <Plus onClick={openFile} className="cursor-pointer" />
            <input ref={inputRef} type="file" className="hidden" />
            <input
              type="text"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Type a message..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatContainer;
