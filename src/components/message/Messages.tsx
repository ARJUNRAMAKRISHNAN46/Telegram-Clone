import bgImage from "../../../src/assets/chat-bg.png";

const Messages = () => {
  return (
    <div
      className="h-[850px]"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    ></div>
  );
};

export default Messages;
