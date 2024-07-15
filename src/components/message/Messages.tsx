import axios from "axios";
import bgImage from "../../../src/assets/chat-bg.png";
import { useEffect, useState } from "react";

const Messages = ({userId}: any) => {
  const [messages, setMessages] = useState();
  const fetchMessage = async () => {
    const messages = await axios.get(
      "https://devapi.beyondchats.com/api/get_chat_messages?chat_id=3888"
    );
    setMessages(messages.data?.data);
  };

  console.log("messages: ", messages);

  useEffect(() => {
    fetchMessage();
  }, []);

  return (
    <div
      className="h-[850px]"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    ></div>
  );
};

export default Messages;
