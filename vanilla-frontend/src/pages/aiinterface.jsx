import React, { useEffect, useRef } from 'react';
import ChatIcon from "../assets/chatbot2.0.png"
import Down from "../assets/downarrow.svg"
import "../styles/Chatbot/Aichat.css";
import ChatbotMsg from '../components/Chatbot/ChatbotMsg';
import ChatbotFooter from '../components/Chatbot/ChatbotForm';
import generateBotResponse from '../Api_backend/GenerateBotResponse';


const Aiinterface = () => {
    const [chatHistory, setChatHistory] = React.useState([]);
    const chatBodyRef = useRef();

    useEffect(()=>{
        chatBodyRef.current.scrollTo({top: chatBodyRef.current.scrollHeight, behavior: "smooth"})
    }, [chatHistory]);
    
    
    return (
        <div className='chatbot-home'>
            <div className="chatbot-header">
                <div className="headerinfo">
                    <img src={ChatIcon} height="42px" />
                    <h2 className="logo-text">Cure AI</h2>
                </div>
                <button><img src={Down} height="30px" width="30x"/></button>
            </div>

            {/* Chat body */}
             <div ref={chatBodyRef} className="chatbody">
                         <div className="bot-massage">
                            <img src={ChatIcon} height="40px" />
                            <p className='msg-text'>Hello! I'm Cure AI, your personal health assistant. How can I assist you today?</p>
                         </div>
                         {/* render the chat history dynamically */}
                {chatHistory.map((msg, index) => (
                    <ChatbotMsg key={index} msg={msg} />
                ))}
                           
             </div>
          
            {/* chat footer */}

            <div className="chat-footer">
                    <ChatbotFooter chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse}/>
            </div>

            
        </div>
    );
};

export default Aiinterface;
