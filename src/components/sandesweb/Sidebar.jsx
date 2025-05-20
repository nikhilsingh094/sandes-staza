import React, { useState } from "react";
import { Backpack, BackpackIcon, Group, LogOut, LogOutIcon, MoreVertical, PlusCircle, Search, StepBack } from "lucide-react";
import EditProfile from "./EditProfile";
import { Badge } from "../ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

function Sidebar({ users }) {
  const [isPlusSidebarVisible, setIsPlusSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsPlusSidebarVisible(!isPlusSidebarVisible);
  };

  return (
    <>
      <div className={`bg-white w-full sm:w-[275px] flex flex-col transition-all duration-300 ${isPlusSidebarVisible ? 'hidden' : 'block'}`}>
        {/* Main Sidebar Content */}
        <div className="p-4">
          <div className="flex items-center justify-between pb-3">
            <p className="font-semibold text-gray-600 text-xl">Sandes</p>
            <div className="flex items-center gap-2">
              <PlusCircle className="font-semibold cursor-pointer" onClick={toggleSidebar} />
              <Popover>
                <PopoverTrigger asChild>
                  <MoreVertical className="text-gray-600" />
                </PopoverTrigger>
                <PopoverContent className="w-fit mt-2 bg-[#fefefe] text-gray-600">
                  <div className="p-2 flex flex-col gap-4 justify-start cursor-pointer">
                    <div className="flex items-center gap-1">
                      <Group className="mr-2" />{" "}
                      <span className="font-semibold">New Group</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <LogOutIcon className="mr-2 text-red-500" />{" "}
                      <span className="font-semibold">Logout</span>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="bg-gray-100 flex items-center gap-2 px-4 py-2 rounded-md border">
            <Search className="text-gray-600" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full font-semibold bg-transparent focus:outline-none text-gray-600 text-sm"
            />
          </div>
        </div>
        
        <hr className="h-[1px] bg-gray-800 border-0" />

        <div className="overflow-y-auto flex-grow px-4">
          <div className="mt-3 mb-3 flex gap-2">
            <Badge className="cursor-pointer" variant="outline">All</Badge>
            <Badge className="cursor-pointer" variant="outline">Groups</Badge>
          </div>

          {users.map((user, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between hover:bg-gray-300 hover:mt-2 px-1 duration-300 hover:rounded-lg cursor-pointer"
            >
              <div className="flex gap-3 items-center py-2">
                <img
                  src={user.image}
                  alt="user"
                  className="w-10 h-10 rounded-full border-2"
                />
                <p className="text-gray-600 font-medium">{user.name}</p>
              </div>
              <div>
                <span className="text-sm text-gray-600 font-semibold">
                  4:12 am
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4">
          <div className="relative group">
            <button className="w-full bg-transparent border text-gray-600 font-semibold py-2 px-4 rounded-md">
              Profile
            </button>
            <div className="absolute hidden group-focus-within:block group-hover:block bg-white text-black shadow-md rounded-md p-4 bottom-full mb-2 w-full z-10">
              <EditProfile />
              <button className="mt-4 flex items-center gap-2 border px-4 py-2 bg-[#fefefe] text-gray-600 font-semibold rounded-md w-full">
                <LogOut className="mr-2 text-red-500" /> Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Plus Sidebar - Show when plus icon is clicked */}
      <div className={`bg-white w-full sm:w-[275px] flex flex-col transition-all duration-300 ${isPlusSidebarVisible ? 'block' : 'hidden'}`}>
        <div className="p-4">
          <StepBack className="mb-2 cursor-pointer" onClick={toggleSidebar}/>
          <div className="bg-gray-100 flex items-center gap-2 px-4 py-2 rounded-md border">
            <Search className="text-gray-600" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full font-semibold bg-transparent focus:outline-none text-gray-600 text-sm"
            />
          </div>
        </div>

        <hr className="h-[1px] bg-gray-800 border-0" />

        <div className="overflow-y-auto flex-grow px-4">
          {users.map((user, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between hover:bg-gray-300 hover:mt-2 px-1 duration-300 hover:rounded-lg cursor-pointer"
            >
              <div className="flex gap-3 items-center py-2">
                <img
                  src={user.image}
                  alt="user"
                  className="w-10 h-10 rounded-full border-2"
                />
                <p className="text-gray-600 font-medium">{user.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
