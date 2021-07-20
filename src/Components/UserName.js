import { useState } from 'react';

function UserName() {
    const [newUserName, setNewUserName] = useState('');
    const [user, setUser] = useState([
        'Hello'
        ]);

    //     const addUserName = () => {
    //         if (newUserName == '') {
    //             alert('No name passed');
    // return;
    //     }
    //     setUser([...user, setNewUserName])
    //     setNewUserName('');
    // }
    const updateNewUserName = (event) => {
        setNewUserName(event.target.value);
    }
    const userElements = user.map((item, index) => <span key={index} id="#myName">{item}</span>);
    
return(
    <div>
    <p id="welcome">Welcome, 
    {userElements}
    <span className="logout"><a href="">Exit Chat</a></span>
    </p>
    
    <input className= "chat"  type="text"  value="" placeholder= "Your Name" id="myName" onChange={updateNewUserName} />
    
    </div>
)
}
export default UserName;