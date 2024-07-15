import { FaMicrophone } from "react-icons/fa";
import { FaRegSmile } from "react-icons/fa";
import { GrAttachment } from "react-icons/gr";
import bgImage from "../../../src/assets/chat-bg.png";

const MessageInput = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
      className="p-2"
    >
      <div className="flex items-center p-2 border rounded-full bg-white dark:bg-gray-800 shadow-sm w-full max-w-md">
        <FaRegSmile className="text-gray-500 dark:text-gray-300 ml-2" />
        <input
          type="text"
          className="flex-grow mx-2 outline-none bg-transparent text-gray-700 dark:text-gray-300"
          placeholder="Message"
        />
        <GrAttachment className="text-gray-500 dark:text-gray-300 mr-2" />
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white ml-2">
          <FaMicrophone />
        </div>
      </div>
    </div>
  );
};

export default MessageInput;
