import Axios from "axios";
import { useState } from "react";

function NewCHatForm(reloadMessageList) {

    const [saving, setSaving] = useState(false);
    const [userName, setUserName] = useState('');
    const [newMessageName, setNewMessageName] = useState('');

    const updateUserName = (event) => {
        setUserName(event.target.value);
    }
    const updateMessage = (event) => {
        setNewMessageName(event.target.value);
    }

    const createMessage = async () => {

        if (userName == '' || newMessageName === '') {
            alert('Please fill the fields');
            return;
        }


        setSaving(true);
        
// must be figure out line 36-37
        const url = 'http://localhost:8071/messages';
        const data = {
            // title: userName,
            // lables: [],
            userName: userName,
            message: newMessageName,
        };
        

        try {
            await Axios.post(url, data);
            setSaving(false);
            setUserName('');
            setNewMessageName('');
            // reloadMessageList();
        } catch (e) {
            alert('Something went wrong!');
            setSaving(false);
        }
    }



    let nameInputField = <input className="form-control" value={userName} onChange={updateUserName} />

    let messageInputField = <input className="form-control" value={newMessageName} onChange={updateMessage} />
    let submitBtn = (
        <button className="btn btn-primary mt-3" onClick={{createMessage}}>
           Add message
        </button>
    )
    if (saving) {
        nameInputField = <input disabled={true} className="form-control" value={userName} onChange={updateUserName} />
        messageInputField = <input className="form-control" value={newMessageName} onChange={updateMessage}  disabled={true}/>
        submitBtn = (
            <button className="btn btn-primary mt-3 disabled" onClick={createMessage} disabled={true}>
                Saving...
            </button>
        )
    }

    return (
        <div>
            <div className="row mt-5">
                <div className="col">
                    <h3>Chat</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-2">
                <div className="col-10">
                    <label>Your name:</label>
                    {nameInputField}
                    </div>
                </div>
                <div className="col-2">
                <div className="col-10">
                    <label>Your message:</label>
                    {messageInputField}
                </div>
                </div>
                {/* <div className="col-10">
                    {inputField}
                </div> */}

            
            <div className="row">
                <div className="col">
                    {submitBtn}
                </div>
            </div>
        </div>
           </div>
    )
}

export default NewCHatForm;