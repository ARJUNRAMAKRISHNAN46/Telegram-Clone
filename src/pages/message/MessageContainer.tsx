import MessageInput from "../../components/message/MessageInput";
import MessageNavbar from "../../components/message/MessageNavbar";
import Messages from "../../components/message/Messages";

const MessageContainer = () => {
  return (
    <div className="">
      <div className=" md:hidden h-screen flex flex-col justify-between">
        <MessageNavbar />
        <Messages />
        <MessageInput />
      </div>
    </div>
  );
};

export default MessageContainer;
