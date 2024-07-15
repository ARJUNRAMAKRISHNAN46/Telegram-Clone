import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chats from "../pages/main/ChatPage";
import NotFound from "../pages/NotFound/NotFound";
import MessageContainer from "../pages/message/MessageContainer";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Chats />} />
        <Route path="/chat" element={<MessageContainer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
