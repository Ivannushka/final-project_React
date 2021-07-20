import Breadcrumbs from '../Components/Breadcrumbs';
import '../Visual/Css/style.css';
import MessageList from '../Components/Chat/MessageList';
import NewChatForm from '../Components/Chat/NewChatForm';
import { useState } from 'react';

function Chat() {
    const [counter, setCounter] = useState(0);

    const reloadMessageList = () => {
        setCounter(counter + 1);
    }
    // const [counter, setCounter] = useState(0);

    // const reloadMessageList = () => {
    //     setCounter(counter + 1);
    // }

    // const breadcrumbPaths  = [
    //     { link: '/', title: 'Home' },
    //     // { link: '/articles', title: 'Articles' },
    //     // { link: `/articles/${article.id}`, title: article.title },
    //     {  title: 'Chat' },
    // ]

    // const [newTaskName, setNewTaskName] = useState('');

//     const [newUserName, setNewUserName] = useState('');
//     const [newMessage, setNewMessage] = useState('');

//     const [list, setList] = useState([
//         'Learn React',
//         'Buy milk',
//         'Be awesome',
//     ]);
//     // const [newUserName, setNewUserName] = useState([
//     //     'Add your user name'
//     // ]);
//     // const [newMessage, setNewMessage] = useState([
//     //     'Add your message'
//     // ]);


//     // event actions

//     const addContent = () => {
//         if (newUserName == '') {
//             alert('No name passed');
//             return;
//         } else if (newMessage == '') {
//             alert('Pleease, enter your message');
// return
//         } 
//         // else {
//         //     return  <h6>{newUserName}</h6>
//         // }

//         setNewUserName(['']);
//         setNewMessage(['']);
//     }

//     const updateNewUserName = (event) => {
//         setNewUserName(event.target.value);
//     }
//     const updateNewMessage = (event) => {
//         setNewMessage(event.target.value);
//     }

 
      
//     // manipulate / create html or jsx elements

//     // const listElements = list.map((item) => {
//     //     return <li>{item}</li>
//     // })
//     const listElements = list.map((item, index) => <li key={index}>{item}</li>);

// // let userInput = <h6>{newUserName}</h6>;
// // let userMessage = <h6>{newMessage}</h6>;

// // const userInput = newUserName.map((item.index) => <li key={index}>{item}</li>);

// // const userMessage = <h6>{{newMessage}}</h6>;


//     return (
//         <div>
//             <h1>Task 4</h1>
//             <ul>
//                 {userInput}
//             </ul>
//             <ul>
//                 {userMessage}
//             </ul>
//             <h4>Chat</h4>
//             <label>Add username</label>
//             <input onChange={updateNewUserName} />
//             <label>Add message</label>
//             <input onChange={updateNewMessage} />
//             <button onClick={addContent}>Add content</button>
//         </div>



    // my var
// const [newMessage, setNewMessage] = useState('');


//     return (
//         <div className=" container d-flex flex-column min-vh-100 main">
//                <div className="row mb-5">
//             <div className="col">
//             <Breadcrumbs paths={breadcrumbPaths} />
//                 </div>
//             </div>
//         <div className="row flex-grow-1">
//       <div id="wrapper">
//       <div id="menu">
//       <form onsubmit="addMessage(event)" className="textUs" name="message" action="">
//         <p id="welcome">Welcome, <span id="#myName"></span> 
//           <span className="logout"><a href="page4.html">Exit Chat</a></span>
//           </p>
//       <div id="chatbox"></div>
//       <div className="username">
//         <label for="name-input-field">Username:</label>
//         <input className= "chat"  type="text"  value="" placeholder= "Your Name" id="myName" />
//       </div>
//       <div className="write-field">
//         <input className= "chat" name="usermsg" type="text" id="usermsg" size="63" />
//       </div>
//       <div className="send-button">
//           <label for="submitmsg">Comment:</label>
//         <input className = "chat-butn" name="submitmsg" type="submit"  id="submitmsg" value="Send" />
      
//       </div>
//       </div>
//       </div>
//       </form>
//       </div>
//       </div>



// backend
//     <div className="container">
//             <div className="row mb-5">
//           <div className="col">
//        <Breadcrumbs paths={breadcrumbPaths} />
//                 </div>
//             </div>
//     <div className="row">
//         <div className="col">
//             <h1>My Chat</h1>
//         </div>
//     </div>
//     <div className="row">
//         <div className="col-12">
//             <MessageList  reloadMessageList={reloadMessageList} counter={counter}/>
//         </div>
//     </div>
//     <NewChatForm reloadMessageList={reloadMessageList} />
// </div>

return (
    <div className="container">
        <div className="row">
            <div className="col">
                <h1>My Tasks</h1>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <messageList  reloadMessageList={reloadMessageList} counter={counter}/>
            </div>
        </div>
        <NewChatForm reloadMessageList={reloadMessageList} />
    </div>
  );
}
export default Chat;