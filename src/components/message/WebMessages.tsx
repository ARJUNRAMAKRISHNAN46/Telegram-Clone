import axios from "axios";
import bgImage from "../../../src/assets/chat-bg.png";
import { useEffect, useState } from "react";
import Message from "./Message";

const WebMessages = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const fetchMessage = async () => {
    const messages = await axios.get(
      "https://devapi.beyondchats.com/api/get_chat_messages?chat_id=3888"
    );
    setMessages(messages.data?.data);
  };

  useEffect(() => {
    fetchMessage();
  }, []);

  return (
    <div
      className="h-[549px] overflow-scroll px-2"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {messages?.map((message) => (
        <Message message={message} />
      ))}
    </div>
  );
};

export default WebMessages;
