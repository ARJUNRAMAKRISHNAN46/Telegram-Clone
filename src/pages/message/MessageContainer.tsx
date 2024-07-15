import MessageInput from "../../components/message/MessageInput";
import MessageNavbar from "../../components/message/MessageNavbar";
import Messages from "../../components/message/Messages";

const MessageContainer = () => {
  return (
    <div>
      <div className="md:hidden">
        <MessageNavbar />
        <Messages />
        <MessageInput />
      </div>
    </div>
  );
};

export default MessageContainer;
