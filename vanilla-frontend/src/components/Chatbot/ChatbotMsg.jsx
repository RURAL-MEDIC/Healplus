import React from "react";
import "../../styles/Chatbot/Aichat.css";
import ChatIcon from "../../assets/chatbot2.0.png";

const ChatbotMsg = ({ msg }) => {
  return (
    <div className={`${msg.role === "model" ? "bot" : "user"}-massage`}>
      {msg.role === "model" && <img src={ChatIcon} height="40px" />}

      <p className="msg-text">{msg.text}</p>
    </div>
  );
};

export default ChatbotMsg;
