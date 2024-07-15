import React, { useEffect, useState } from "react";
import axios from "axios";
import Chat from "./Chat";
import SkeletonLoader from "../common/SkeletonLoader";

interface ChatData {
  id: string;
  message: string;
}

const ChatList: React.FC = () => {
  const [chats, setChats] = useState<ChatData[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(() => {
    const fetchChats = async (page: number) => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://devapi.beyondchats.com/api/get_all_chats?page=${page}`
        );
        const newChats = response.data?.data?.data || [];
        setChats((prevChats) => [...prevChats, ...newChats]);
        if (newChats.length === 0) {
          setHasMore(false);
        }
      } catch (error) {
        console.error("Error fetching chats:", error);
      } finally {
        setLoading(false);
      }
    };

    if (hasMore) {
      fetchChats(page);
    }
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    ) {
      return;
    }
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <div className="h-[94vh] overflow-scroll">
      <Chat chats={chats} />
      {loading && <SkeletonLoader />}
    </div>
  );
};

export default ChatList;
