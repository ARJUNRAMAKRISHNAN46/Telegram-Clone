import axios from "axios";
import bgImage from "../../../src/assets/chat-bg.png";
import { useEffect, useState } from "react";
import Message from "./Message";
import SkeletonLoader from "../common/SkeletonLoader";

const Messages = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchMessage = async () => {
    try {
      const response = await axios.get(
        "https://devapi.beyondchats.com/api/get_chat_messages?chat_id=3888"
      );
      setMessages(response.data?.data);
    } catch (error) {
      console.error("Error fetching messages", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessage();
  }, []);

  return (
    <div
      className="h-[850px] overflow-scroll px-2"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {loading ? (
        <SkeletonLoader />
      ) : (
        messages?.map((message) => (
          <Message key={message.id} message={message} />
        ))
      )}
    </div>
  );
};

export default Messages;
