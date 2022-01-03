import React from 'react';
import { useState, useEffect } from 'react';
import ScrollToBottom from "react-scroll-to-bottom";
import '../Chats/Chats.css';
import Dock from '../Dock.js';


function Chats({socket}){

    const [newMessage, setNewMessage] = useState("");
    const [messageList, setMessageList] = useState([]);

    const sendMessage = async () => {
        if (newMessage !== "") {
          const mData = {
            room : '123',
            author : 'Ali',
            message : newMessage,
            time : new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
        };
    
        await socket.emit("send_message", mData);

          setMessageList((list) => [...list, mData]);
          setNewMessage("");
        }
      };

      useEffect(() => {
        socket.on("receive_message", (data) => {
            console.log(data);
          setMessageList((list) => [...list, data]);
        });
      }, [socket]);

    return(
        <div className='outerBox'>
            <div className="leftColumn">
                <div className="upperLeft">
                    <img src="https://www.kindpng.com/picc/m/690-6904538_men-profile-icon-png-image-free-download-searchpng.png" alt="" />
                    <p className="userName">Muhammad Azeem</p>
                </div>
                <div className="lowerLeft">
                    <p className="title">About:</p>
                    <p className="details">Too lazy</p>
                    <p className="title">Phone Number:</p>
                    <p className="details">0314114714</p>
                    <p className="title">Email:</p>
                    <p className="details">mazeem8856@gmail.com</p>
                    <p className="title">Status:</p>
                    <p className="details">Single</p>
                </div>
            </div>
            <div className="centerColumn">
            <div className="chat-body">
                <ScrollToBottom className="message-container">
                {messageList.map((messageContent) => {
                    return (
                    <div className="message" id={'Ali' === messageContent.author ? "you" : "other"}>
                        <div>
                            <div className="message-content">
                                <p>{messageContent.message}</p>
                            </div>
                            <div className="message-meta">
                                <p id="time">{messageContent.time}</p>
                                <p id="author">{messageContent.author}</p>
                            </div>
                        </div>
                    </div>
                    );
                })}
                </ScrollToBottom>
        	</div> 
                <div className="messageBox">
                    <div className="messageText">
                        <input type="text" placeholder="Write Message..." value={newMessage} onChange={(event)=>{
                            setNewMessage(event.target.value);
                        }} onKeyPress={(event) => {
                            event.key === "Enter" && sendMessage();
                        }}/>
                    </div>
                    <div className="sendButton">
                        <button type='submit' onClick={sendMessage}><ion-icon size="large" name="send"></ion-icon></button>
                    </div>
                </div>
            </div>
            <div className="rightColumn">
            </div>
        </div>
    );
}

export default Chats;