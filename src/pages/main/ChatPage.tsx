import Chats from "../../components/chat/Chats";
import Navbar from "../../components/common/Navbar";

const ChatPage = () => {
  return (
    <div className="border-2 border-gray-300  w-[412px] h-screen">
      <Navbar />
      <Chats />
    </div>
  );
};

export default ChatPage;
