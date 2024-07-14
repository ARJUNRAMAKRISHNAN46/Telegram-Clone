import Chat from "./Chat";
import axios from "axios";
import { useEffect, useState } from "react";

const Chats = () => {
    const [chats, setChats] = useState();
    useEffect(() => {
      fetchChats();
    }, []);
    const fetchChats = async () => {
      const fetchedChats = await axios.get(
        `https://devapi.beyondchats.com/api/get_all_chats?page=1`
      );
      // console.log("🚀 ~ Chat ~ chats:", fetchedChats.data?.data);
      setChats(fetchedChats.data?.data?.data);
    };
  
    // console.log(chats);
  return (
    <div>
      <Chat chats={chats}/>
    </div>
  );
};

export default Chats;
