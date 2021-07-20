import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import axios from 'axios';

function Message({message, reloadMessageList}) {
    const [messageCompleted, setMessageCompleted] = useState(message.isCompleted);
    const [checkboxDisabled, setCheckboxDisabled] = useState(false);
    const [deletingMessage, setDeletingMessage] = useState(false);

    const toggleComletion = async () => {
        setCheckboxDisabled(true);
        const data = {
            title: message.title,
            lables: message.lables,
            isCompleted: !messageCompleted,
        };
        const url = `http://localhost:8071/messages/${message._id}`;
        try {
            await axios.put(url, data);
            setMessageCompleted(!messageCompleted);
            setCheckboxDisabled(false);
        } catch(e) {
            alert('Whoops, something went wrong');
        }
    }

    //initial state - enabled, not completed
//user clicks on checkbox => disabled, not completed => sendout request to complete to the server
//wait
//receive confirmation from the server (OK 200), => enabled, completed


    const deleteMessage = async () => {
        setDeletingMessage(true);
        const url = `http://localhost:8071/messages/${message._id}`;
        try {
            await axios.delete(url);
            reloadMessageList();
        } catch(e) {
            alert('Whoops, something went wrong');
        }
    }

    let deleteBtn = ''
    if (messageCompleted) {
        let buttonContent = <FontAwesomeIcon icon={faTrashAlt} />;
        if (deletingMessage) {
            buttonContent = <FontAwesomeIcon icon={faSpinner} spin />;
        }

        deleteBtn = (
            <button className="btn btn-danger float-end" disabled={deletingMessage} onClick={deleteMessage} >
                {buttonContent}
            </button>
        )
    }

    return (
        <li className="list-group-item">
            <input 
                className="form-check-input me-1" 
                type="checkbox" 
                checked={messageCompleted}
                disabled={checkboxDisabled}
                onChange={toggleComletion}
            />
            {message.title}
            {deleteBtn}
        </li>
    )
}





// VARAN

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSpinner } from '@fortawesome/free-solid-svg-icons';

// function Message({ messages }) {

//     if (!messages.loading && messages.length === 0) {
//         return <h6> Something went wrong :( </h6>;
//     }
//     else if (!messages.loading) {


//         return ([...messages.items].reverse().map((message, index) => {
//             return (
//                 <li key={index} className="list-group-item">
//                     <div className="row">
//                         <div className="col d-flex justify-content-between">
//                             <span className="user-name lead fw-bold mx-3 chat-name">{message.userName}</span>
//                             <span className="review-sent fw-lighter">{(message.createdAt).substring(0, 10)} 
//                             </span>
//                         </div>
//                     </div>
//                     <div className="review pt-2">{message.message}</div>
//                 </li>
//             )
//         }))
//     }
//     else {
//         return <FontAwesomeIcon icon={faSpinner} spin />
//     }
// }


export default Message;