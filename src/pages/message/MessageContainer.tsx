import MessageInput from "../../components/message/MessageInput";
import MessageNavbar from "../../components/message/MessageNavbar";
import Messages from "../../components/message/Messages";
import { useLocation, useParams } from "react-router-dom";

const MessageContainer = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get("name");
  const { id } = useParams();
  console.log("🚀 ~ MessageContainer ~ name:", name, id);

  return (
    <div className="">
      <div className=" md:hidden h-screen flex flex-col justify-between">
        <MessageNavbar name={name} />
        <Messages />
        <MessageInput />
      </div>
    </div>
  );
};

export default MessageContainer;
