import React from "react";
import ChatSidebar from "../../components/ChatSidebar";
import privateRoute from "../../components/privateRoute";

const Chat = () => {
  return (
    <div className="w-80 right-0 top-[96px] fixed">
      <ChatSidebar />
    </div>
  );
};

export default privateRoute(Chat);
