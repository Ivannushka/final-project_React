import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Breadcrumbs from '../Components/Breadcrumbs';
import '../Visual/Css/style.css';

function Chat2() {
  const breadcrumbPaths = [{ link: '/', title: 'Home' }, { title: 'Chat' }];
  const [messages, setMessages] = useState([]);
  const [userNameInput, setUserNameInput] = useState('');
  const [messageInput, setMessageInput] = useState('');

  const sendMessage = () => {
    const newMessage = {
      text: messageInput,
      username: userNameInput,
    };

    setMessages([...messages, newMessage]);
    setMessageInput('');
    setUserNameInput('');
  };

  const updateUserInput = (event) => {
    setUserNameInput(event.target.value);
  };
  const updateMessageInput = (event) => {
    setMessageInput(event.target.value);
  };

  const messageElements = messages.map((msg, index) => {
    return (
      <p key={index} id="welcome">
        {/* <p key={index} id="welcome">Welcome, &nbsp;  */}
        <span id="#myName">{msg.username}</span>
        <div id="chat-text">{msg.text}</div>
      </p>
    );
  });

  return (
    <div className=" container d-flex flex-column min-vh-100 main">
      <div className="row mb-5">
        <div className="col">
          <Breadcrumbs paths={breadcrumbPaths} />
        </div>
      </div>
      <div className="row flex-grow-1">
        <div id="wrapper">
          <div id="menu">
            <p id="welcome">
              Welcome,
              {messages.username}
              <span id="#myName"></span>
              <span className="logout">
                <NavLink to="/chat2/">Exit Chat</NavLink>
              </span>
            </p>
            <div id="chatbox">{messageElements}</div>
            <div className="username">
              <label for="name-input-field">Username:</label>
              <input
                className="chat"
                type="text"
                placeholder="Your Name"
                id="myName"
                onChange={updateUserInput}
              />
            </div>
            <div className="write-field">
              <input
                className="chat"
                name="usermsg"
                type="text"
                id="usermsg"
                size="63"
                onChange={updateMessageInput}
              />
            </div>
            <div className="send-button">
              <label for="submitmsg">Comment:</label>
              <button
                className="chat-butn"
                name="submitmsg"
                type="submit"
                id="submitmsg"
                onClick={sendMessage}>
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Chat2;
