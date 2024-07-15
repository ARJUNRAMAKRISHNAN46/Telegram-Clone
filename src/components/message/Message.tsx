const Message = ({ message }: any) => {

  const chatClass = message?.sender?.id == 1 ? "start" : "end";

  return (
    <div className={`flex justify-${chatClass}`}>
      <div
        className={`chat-bubble bg-white dark:bg-gray-800 my-2`}
      >
        <h1>{message?.message}</h1>
      </div>
    </div>
  );
};

export default Message;
