import Breadcrumbs from '../Components/Breadcrumbs';
import '../Visual/Css/style.css';
import { useState } from 'react';

function Chat() {
    const breadcrumbPaths  = [
        { link: '/', title: 'Home' },
        // { link: '/articles', title: 'Articles' },
        // { link: `/articles/${article.id}`, title: article.title },
        {  title: 'CHat' },
    ]

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
      {/* <form onsubmit="addMessage(event)" className="textUs" name="message" action=""> */}
        <p id="welcome">Welcome, <span id="#myName"></span> 
          <span className="logout"><a href="page4.html">Exit Chat</a></span>
          </p>
      <div id="chatbox"></div>
      <div className="username">
        <label for="name-input-field">Username:</label>
        <input className= "chat"  type="text"  value="" placeholder= "Your Name" id="myName" />
      </div>
      <div className="write-field">
        <input className= "chat" name="usermsg" type="text" id="usermsg" size="63" />
      </div>
      <div className="send-button">
          <label for="submitmsg">Comment:</label>
        <input className = "chat-butn" name="submitmsg" type="submit"  id="submitmsg" value="Send" />
      
      </div>
      </div>
      </div>
      {/* </form> */}
      </div>
      </div>
    );
}
export default Chat;