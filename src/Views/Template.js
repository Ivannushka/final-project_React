import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Breadcrumbs from '../Components/Breadcrumbs';
import '../Visual/Css/style.css';
import UserName from '../Components/UserName';

function Template() {
  const breadcrumbPaths = [{ link: '/', title: 'Home' }, { title: 'Chat' }];

  const [newMessageName, setNewMessageName] = useState('');
  const [message, setMessage] = useState(['']);

  const [newUserName, setNewUserName] = useState('');
  const [user, setUser] = useState(['Hello']);

  const addMessage = () => {
    if (newMessageName == '') {
      alert(' Pleease, enter your message');
      return;
    } else if (newUserName == '') {
      alert('No name passed');
      return;
    }

    setMessage([...message, newMessageName]);
    setNewMessageName('');
    setUser([...user, setNewUserName]);
    setNewUserName('');
  };
  const updateNewUserName = (event) => {
    setNewUserName(event.target.value);
  };

  const updateNewMessageName = (event) => {
    setNewMessageName(event.target.value);
  };

  const messageElements = message.map((item, index) => (
    <div key={index}>{item}</div>
  ));
  const userElements = user.map((item, index) => (
    <span key={index} id="#myName">
      {item}
    </span>
  ));

  //     <li key={index}>
  //     <div>
  //       {msg.username}
  //     </div>
  //     <p>
  //   {msg.text}
  //     </p>
  //     </li>
  //   );
  // })

  return (
    // teCHER
    //  <div>
    //    {/* <h1>Hello world {count}</h1> */}
    //    <h1>Hello world </h1>

    //  </div>
    // MINE

    <div className=" container d-flex flex-column min-vh-100 main">
      <div className="row mb-5">
        <div className="col">
          <Breadcrumbs paths={breadcrumbPaths} />
        </div>
      </div>
      <div className="row flex-grow-1">
        <div id="wrapper">
          {messageElements}

          <div id="menu">
            {/* <form onsubmit="addMessage(event)" className="textUs" name="message" action=""> */}
            <UserName />

            <p id="welcome">
              Welcome,
              <span id="#myName"></span>
              {userElements}
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
                value={newUserName}
                placeholder="Your Name"
                id="myName"
                onChange={updateNewUserName}
              />
            </div>
            <div className="write-field">
              <input
                className="chat"
                name="usermsg"
                type="text"
                id="usermsg"
                size="63"
                onChange={updateNewMessageName}
              />
            </div>
            <div className="send-button">
              <label for="submitmsg">Comment:</label>
              <input
                className="chat-butn"
                name="submitmsg"
                type="submit"
                id="submitmsg"
                value="Send"
                onClick={addMessage}
              />
              <button onClick={addMessage}>Add task</button>
            </div>
          </div>
        </div>

        {/* </form> */}
      </div>
    </div>
  );
}
export default Template;
