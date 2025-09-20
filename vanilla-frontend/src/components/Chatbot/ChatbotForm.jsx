import  { useRef } from 'react';
import React from 'react';
import "../../styles/Aichat.css";
import Send from "../../assets/send.svg"
const ChatbotForm = ({chatHistory, setChatHistory ,generateBotResponse}) => {

  const inputRef = useRef();
  const handleFormSubmit = (e) => {
   e.preventDefault();
   const userMassage = inputRef.current.value.trim();
   if(!userMassage) return;
   inputRef.current.value = "";
   console.log(userMassage);
  //  update chat history as user msg.
   setChatHistory((history) => [...history, {role: 'user', text: userMassage}]);

   setTimeout(() => {
           setChatHistory((history) => [...history, {role: 'model', text: "Thinking..."}]);
  //  Call the Function to generate AI response
        generateBotResponse([...chatHistory, {role: 'user', text: userMassage}]);
   },400)
  }
  
    return (
          <form action="#" className='chat-form' onSubmit={handleFormSubmit} >
                <input ref={inputRef} type="text" name="" id="" placeholder='Ask/massage...'  className='msg-input' required/>
                <button><img src={Send} height="45px" width="45px"/></button>
          </form>
             
           
    );
}

export default ChatbotForm;
