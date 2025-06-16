import React, { useEffect, useRef, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Delete,
  Eraser,
  MoreVertical,
  Plus,
  Send,
  Smile,
} from "lucide-react";
import chatbg from "../../assets/BGsociall.svg";
import chatbg2 from "../../assets/BGsocial.svg";
import EmojiPicker from "emoji-picker-react";
import { connectXMPP } from "../sandesweb/stanzaClient";
import { useSelector } from "react-redux";

function Chat({ users, jid, password, to }) {
  const inputRef = useRef(null);
  const [bgColor, setBgColor] = useState("white");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const clientRef = useRef(null);

  const { selectedUser } = useSelector((state) => state.user);

  useEffect(() => {
    if (!selectedUser?.jid) return;

    const client = connectXMPP({
      jid,
      password,
      onMessage: (msg) => {
        const bareFrom = msg.from.split('/')[0];
        const bareTo = msg.to.split('/')[0];

        // Only show messages between selected user and self
        if (
          (bareFrom === jid && bareTo === selectedUser.jid) ||
          (bareFrom === selectedUser.jid && bareTo === jid)
        ) {
          setMessages((prev) => [...prev, { from: bareFrom, body: msg.body }]);
        }
      },
    });

    clientRef.current = client;
    setMessages([]); // Clear messages when selected user changes

    return () => {
      client.disconnect();
    };
  }, [jid, password, selectedUser?.jid]);


 const sendMessage = () => {
  if (!input.trim() || !selectedUser?.jid) return;

  clientRef.current.sendMessage({
    to: selectedUser.jid,
    type: "chat",
    body: input,
  });

  setMessages((prev) => [...prev, { from: jid, body: input }]);
  setInput("");
};

  const openFile = () => inputRef.current?.click();

  const handleColorClick = (color) => {
    setBgColor(color);
  };

  const defaultImage = chatbg2;
  const transparentImage = chatbg;

  const toggleEmojiPicker = () => {
    setShowEmojiPicker((prev) => !prev);
  };

  const handleEmojiClick = (emojiData) => {
    setInput((prev) => prev + emojiData.emoji);
  };

  return (
    <div className="flex-1 flex flex-col bg-white">
      {/* Header */}
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
              <MoreVertical className="text-gray-600" />
            </PopoverTrigger>
            <PopoverContent className="w-80 mr-64 mt-2 bg-[#fefefe] text-gray-600">
              <div className="p-2 flex flex-col gap-4 justify-start cursor-pointer">
                <div className="flex items-center gap-1">
                  <Delete className="mr-2" />
                  <span className="font-semibold">Delete Chat</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eraser className="mr-2" />
                  <span className="font-semibold">Clear Chat</span>
                </div>
              </div>
              <div className="mt-4">
                <p className="font-semibold text-lg">Choose Chat Wallpaper:</p>
                <div className="flex gap-2 mt-2">
                  {["#922040", "#FD6769", "#7ACBA5", "#517E7E", "#1D2326", "#55626F"].map(
                    (color) => (
                      <div
                        key={color}
                        onClick={() => handleColorClick(color)}
                        className="w-10 h-10 cursor-pointer rounded-full"
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

      {/* Messages */}
      <div
        className="flex-grow overflow-y-auto p-4 space-y-4 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgColor === "white" ? defaultImage : transparentImage})`,
          backgroundColor: bgColor,
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-start gap-2 ${msg.from === jid ? "justify-end" : "justify-start"}`}
          >
            {msg.from !== jid && (
              <img
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQTlwWgDhpwPXCkXe8piQjXZzfMQh9aQrtPAblzDBwlp4WyO1znKRiXRsA45I2j9agVJH5mm_hYVAK9sRXtoym1pQ"
                alt="sender"
                className="w-10 h-10 rounded-full"
              />
            )}
            <div className={`${msg.from === jid ? "bg-[#A6E38D]" : "bg-gray-100"} p-2 rounded-md max-w-xs`}>
              <p className="text-sm text-gray-700 font-semibold">{msg.body}</p>
            </div>
            {msg.from === jid && (
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023.jpg"
                alt="sender"
                className="w-10 h-10 rounded-full"
              />
            )}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-3 border-t flex items-center gap-2">
        <input ref={inputRef} type="file" className="hidden" />
        <div className="w-full py-2 flex items-center gap-2 bg-gray-100 px-2 border-1 rounded-lg">
          <Plus onClick={openFile} className="cursor-pointer" />
          <Smile onClick={toggleEmojiPicker} className="cursor-pointer" />
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
