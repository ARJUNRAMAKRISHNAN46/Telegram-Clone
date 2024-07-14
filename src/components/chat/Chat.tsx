import profilePhoto from "../../../src/assets/demoProfileForTelegram.jpeg";

const Chat = ({ chats }: any) => {
  console.log("🚀 ~ Chat ~ chats:", chats);

  return (
    <div>
      {chats?.map((chat: any) => (
        <div className="flex justify-between px-4">
          <div className="flex">
            <img
              className="rounded-full w-16"
              src={profilePhoto}
              alt={profilePhoto}
            />
            <div className="ml-2 py-1">
              <h1 className="font-semibold">{chat?.creator?.name}</h1>
              <p className="text-sm text-gray-500">{chat?.creator?.name} joined Telegram</p>
            </div>
          </div>
          <h1 className="text-[12px] text-gray-500">july 14</h1>
        </div>
      ))}
    </div>
  );
};

export default Chat;
