import profilePhoto from "../../../src/assets/demoProfileForTelegram.jpeg";

const Chat = ({ chats }: any) => {
  const openChat = (userId: string) => {
    console.log("🚀 ~ openChat ~ userId:", userId);
  };

  return (
    <div>
      {chats?.map((chat: any) => (
        <div className="flex justify-between px-4 mt-4" onClick={() => openChat(chat?.creator?.id)}>
          <div className="flex">
            <img
              className="rounded-full w-14 bg-white dark:bg-gray-600"
              src={profilePhoto}
              alt={profilePhoto}
            />
            <div className="ml-2 py-1">
              <h1 className="text-gray-600 dark:text-white font-semibold">
                {chat?.creator?.name || "No name"}
              </h1>
              <p className="text-sm text-gray-400 dark:text-gray-300">
                {chat?.creator?.name} joined Telegram
              </p>
            </div>
          </div>
          <h1 className="text-[12px] text-gray-500 dark:text-gray-300">
            july 14
          </h1>
        </div>
      ))}
    </div>
  );
};

export default Chat;
