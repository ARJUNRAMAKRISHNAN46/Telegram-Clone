import MessageInput from "../../components/message/MessageInput";
import MessageNavbar from "../../components/message/MessageNavbar";
import Messages from "../../components/message/Messages";
import { useLocation } from "react-router-dom";
import ChatPage from "../main/ChatPage";
import WebMessages from "../../components/message/WebMessages";

const MessageContainer = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get("name");

  return (
    <div className="">
      <div className=" md:hidden h-screen flex flex-col justify-between">
        <MessageNavbar name={name} />
        <Messages />
        <MessageInput />
      </div>
      <div className="hidden md:block">
        <div className="flex">
          <div>
            <ChatPage />
          </div>
          <div className="flex justify-end h-[400px]">
            <div className="w-[1100px]  bg-white">
              <MessageNavbar name={name} />
              <WebMessages />
              <MessageInput />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageContainer;
