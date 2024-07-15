import MessageInput from "../../components/message/MessageInput";
import MessageNavbar from "../../components/message/MessageNavbar";
import Messages from "../../components/message/Messages";

const MessageContainer = () => {
  return (
    <div>
      <MessageNavbar />
      <Messages />
      <MessageInput />
    </div>
  );
};

export default MessageContainer;
