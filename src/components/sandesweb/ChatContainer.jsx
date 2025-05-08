import {
  Delete,
  Eraser,
  LogOut,
  LogOutIcon,
  MoreVertical,
  Plus,
  Search,
} from "lucide-react";
import React, { useRef } from "react";
import EditProfile from "./EditProfile";
import chatbg from "../../assets/chat-bg.svg";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";

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
                className="w-full font-semibold bg-transparent focus:outline-none text-gray-600 text-sm"
              />
            </div>
          </div>

          <hr className="h-[1px] bg-white border-0" />

          <div className="overflow-y-auto flex-grow px-4">
            <div className="mt-3 mb-3 flex gap-2">
              <Badge variant="outline" className="text-white cursor-pointer">
                All
              </Badge>
              <Badge variant="outline" className="text-white cursor-pointer">
                Groups
              </Badge>
            </div>

            {users.map((user, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div className="flex gap-3 items-center py-2">
                  <img
                    src={user.image}
                    alt="user"
                    className="w-10 h-10 rounded-full"
                  />
                  <p className="text-white font-medium">{user.name}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-300">4:12 am</span>
                </div>
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
          <div className="bg-[#1D3557] flex items-center justify-between">
            <div className="text-white flex gap-2 p-4 items-center">
              <img
                src={users[0].image}
                alt="profile"
                className="w-10 h-10 rounded-full"
              />
              <p className="font-semibold">Virat</p>
            </div>
            <div className="p-4">
              <Popover>
                <PopoverTrigger asChild>
                  <MoreVertical className="text-white" />
                </PopoverTrigger>
                <PopoverContent className="w-80 mr-64 mt-2 bg-[#1D3557] text-white">
                  <div className="p-2 flex flex-col gap-4 justify-start cursor-pointer">
                    <div className="flex items-center gap-1">
                      <Delete className="mr-2" />{" "}
                      <span className="font-semibold">Delete Chat</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eraser className="mr-2" />{" "}
                      <span className="font-semibold">Clear Chat</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <LogOut className="mr-2" />{" "}
                      <span className="font-semibold">Logout</span>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
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
              className="w-full border rounded-md px-4 py-2 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Write a message..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatContainer;
