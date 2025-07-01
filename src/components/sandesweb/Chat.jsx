import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addMessage, clearMessages, deleteChat } from "../sandesweb/redux/messageSlice";
import { Smile, Plus, Send, MoreVertical, Delete, Eraser } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import EmojiPicker from "emoji-picker-react";

// ✅ Backgrounds
import chatbg from "../../assets/BGsociall.svg";   // Transparent overlay
import chatbg2 from "../../assets/BGsocial.svg";   // Default full wallpaper
import { selectUser } from "./redux/userSlice";
import { clearNotification } from "./redux/notificationSlice";

function Chat({ users, jid, client }) {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [bgColor, setBgColor] = useState("white");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const { selectedUser } = useSelector((state) => state.user);
  const messages = useSelector(
    (state) => state.messages.chatMap[selectedUser?.jid] || []
  );

  const sendMessage = () => {
    if (!input.trim() || !selectedUser?.jid) return;

    client.sendMessage({
      to: selectedUser.jid,
      type: "chat",
      body: input,
    });

    dispatch(
      addMessage({
        userJid: selectedUser.jid,
        message: {
          body: input,
          fromMe: true,
           timestamp: new Date().toISOString(),
        },
      })
    );

    setInput("");
  };

  const handleEmojiClick = (emojiData) => {
    setInput((prev) => prev + emojiData.emoji);
  };

  return (
    <div className="flex-1 flex flex-col bg-white">
      {/* Chat Header */}
      <div className="bg-white shadow-md flex items-center justify-between">
        <div className="text-white flex gap-2 p-4 items-center">
          <img
            src={users[0].image}
            alt="profile"
            className="w-10 h-10 rounded-full border-2"
          />
          <p className="font-semibold text-gray-600">{selectedUser?.name}</p>
        </div>
        <div className="p-4">
          <Popover>
            <PopoverTrigger asChild>
              <MoreVertical className="text-gray-600 cursor-pointer" />
            </PopoverTrigger>
            <PopoverContent
              className="w-80 bg-[#fefefe] text-gray-600 right-0 mt-2 z-50"
              side="bottom"
              align="end"
            >
              <div className="p-2 flex flex-col gap-4 justify-start cursor-pointer">
                <div className="flex items-center gap-1"
                  onClick={() => {
                    if (selectedUser?.jid) {
                      dispatch(deleteChat(selectedUser.jid));
                      dispatch(clearNotification(selectedUser.jid)); // 🔥 CLEAR NOTIFICATION
                      dispatch(selectUser(null)); // reset selected user
                    }
                  }}
                >
                  <Delete className="mr-2" />
                  <span className="font-semibold">Delete Chat</span>
                </div>
                <div className="flex items-center gap-1"
                  onClick={() => {
                    if (selectedUser?.jid) {
                      dispatch(clearMessages(selectedUser.jid));
                    }
                  }}
                >
                  <Eraser className="mr-2" />
                  <span className="font-semibold">Clear Chat</span>
                </div>
              </div>
              <div className="mt-4">
                <p className="font-semibold text-lg">Choose Chat Wallpaper:</p>
                <div className="flex gap-2 mt-2">
                  {["white", "#922040", "#FD6769", "#7ACBA5", "#517E7E", "#1D2326", "#55626F"].map(
                    (color) => (
                      <div
                        key={color}
                        onClick={() => setBgColor(color)}
                        className="w-10 h-10 cursor-pointer rounded-full border"
                        style={{ backgroundColor: color }}
                      />
                    )
                  )}
                </div>
              </div>
            </PopoverContent>
          </Popover>

        </div>
      </div>

      {/* Messages Area */}
      <div
        className="flex-grow overflow-y-auto p-4 space-y-4 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundColor: bgColor,
          backgroundImage:
            bgColor === "white" ? `url(${chatbg2})` : `url(${chatbg})`,
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
        }}

      >
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.fromMe ? "justify-end" : "justify-start"}`}>
            <div className={`${msg.fromMe ? "bg-[#A6E38D]" : "bg-gray-100"} p-2 rounded-md max-w-xs`}>
              <p className="text-sm text-gray-700 font-semibold">{msg.body}</p>
              <p className="text-[10px] text-gray-500 font-bold text-right mt-1">
                {new Date(msg.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </p>
            </div>
          </div>
        ))}

      </div>

      {/* Input Area */}
      <div className="p-3 border-t flex items-center gap-2">
        <div className="w-full py-2 flex items-center gap-2 bg-gray-100 px-2 border-1 rounded-lg">
          <Plus onClick={() => inputRef.current?.click()} className="cursor-pointer" />
          <Smile onClick={() => setShowEmojiPicker(!showEmojiPicker)} className="cursor-pointer" />
          {showEmojiPicker && (
            <div className="md:absolute bottom-36 z-10">
              <EmojiPicker onEmojiClick={handleEmojiClick} />
            </div>
          )}
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="w-full bg-gray-100 border-none rounded-md py-2 font-semibold text-gray-600 focus:outline-none"
            placeholder="Write a message..."
          />
          <Send className="cursor-pointer" onClick={sendMessage} />
        </div>
      </div>
    </div>
  );
}

export default Chat;
