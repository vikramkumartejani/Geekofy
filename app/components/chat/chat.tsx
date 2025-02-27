"use client";

import { useState, useEffect, useRef } from "react";
import {
  Minimize2,
  Maximize2,
  X,
  ImageIcon,
  Send,
  Ticket,
  CheckCheck,
  Check,
} from "lucide-react";
import type { ChatMessage } from "@/types";
import Button from "../Element/Button";
import Input from "../Element/Input";
import Image from "next/image";
import openArrows from "../../../public/assets/openArrows.svg";
import closeArrows from "../../../public/assets/closeArrows.svg";
import crossIcon from "../../../public/assets/whiteCrossIcon.svg";
import uploadImageIcon from "../../../public/assets/uploadImage.png";
import sendIcon from "../../../public/assets/fa_send.svg";

interface ChatWindowProps {
  serviceId: string;
  serviceName: string;
  onClose: () => void;
  index: number;
  totalChats: number;
}

export function ChatWindow({
  serviceId,
  serviceName,
  onClose,
  index,
  totalChats,
}: ChatWindowProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isMaximized, setIsMaximized] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef.current) {
      const rect = chatRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const chatWidth = isMaximized ? 500 : 320;
      const totalWidth = chatWidth * totalChats;
      const rightOffset = (totalChats - index - 1) * chatWidth;

      if (rect.right > viewportWidth) {
        chatRef.current.style.right = `${rightOffset}px`;
      }
    }
  }, [index, totalChats, isMaximized]);

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      senderId: "user",
      senderName: "You",
      message: input,
      timestamp: new Date(),
      isViewed: false,
    };

    setMessages([...messages, newMessage]);
    setInput("");
  };

  return (
    <div
      ref={chatRef}
      className={`fixed bottom-0 bg-[#ffffff] border-[0.5px] border-[#00000080] rounded-t-lg shadow-lg flex flex-col transition-all duration-300 ease-in-out overflow-hidden ${
        isMaximized
          ? "w-full h-full md:w-[500px] md:h-[600px]"
          : " w-[310px] h-[400px] md:w-[350px] md:h-[400px]"
      }`}
      style={{ right: `${index * (isMaximized ? 500 : 320)}px` }}
    >
      <div className="px-[14px] py-[10px] border-b flex items-center justify-between bg-[#0084FF] text-primary-foreground">
        <h3 className="font-bold text-[18px] text-[#ffffff] ">{serviceName}</h3>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsMaximized(!isMaximized)}
            className="p-1 hover:bg-primary-foreground/20 rounded"
          >
            {isMaximized ? (
              <Image className="w-5 h-5" src={closeArrows} alt="" />
            ) : (
              <Image className="w-5 h-5" src={openArrows} alt="" />
            )}
          </button>
          <button
            onClick={onClose}
            className="p-1 hover:bg-primary-foreground/20 rounded"
          >
            <Image className="w-5 h-5" src={crossIcon} alt="" />
          </button>
        </div>
      </div>
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.senderId === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div className="max-w-[80%] ">
              <div className=" text-end ">
                <p className="text-sm font-semibold">{message.senderName}</p>
              </div>
              <div
                className={`text-sm rounded-[20px] whitespace-normal py-[10px] overflow-hidden break-words ${
                  message?.senderId === "user"
                    ? "bg-[#0084FF] text-[#ffffff] font-semibold px-[20px]"
                    : "bg-[#0000001A] text-[#000000] font-medium px-[15px]"
                }`}
              >
                <p>{message?.message || ""}</p>
              </div>

              <div className="text-xs opacity-70 flex items-center justify-end ">
                <p>
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                  })}
                </p>
                <p>
                  {message.isViewed ? (
                    <CheckCheck className="w-5 text-[#0084FF] " />
                  ) : (
                    <Check className="w-4" />
                  )}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 border-t flex items-center space-x-2">
        <button>
          <Image src={uploadImageIcon} alt="" className="w-4 h-4" />
        </button>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Write a message ..."
          className="flex-1 h-[48px] px-3 rounded-lg transition-all duration-200 border placeholder:text-gray-500 text-base outline-none disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed"
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>
          <Image src={sendIcon} alt="" className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
