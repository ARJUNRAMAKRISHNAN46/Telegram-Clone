import Chats from "../../components/chat/Chats";
import Navbar from "../../components/common/Navbar";

const ChatPage = () => {
  return (
    <div className="border-2 bg-white dark:bg-gray-800 border-gray-300 w-screen md:w-[412px]">
      <Navbar />
      <Chats />
    </div>
  );
};

export default ChatPage;
