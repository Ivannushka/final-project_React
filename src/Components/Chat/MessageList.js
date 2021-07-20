import axios from "axios";
import { useState, useEffect } from "react";
import Message from './Message';

function MessageList({counter, reloadMessageList}) 

{
    
    const [messages, setMessages] = useState({
        loading: true,
        items: [],
    });

    // VARAN
    // const loadMessage = async () => {
    //     setMessages({
    //         loading: true,
    //         items: [],
    //     });

        const loadMessage = async () => {
        try {
            const url = 'http://localhost:8071/messages';
            const response = await axios.get(url);
           
           
            setMessages({
                loading: false,
                items: response.data,
            });
        } catch (e) {
            alert('Whoops, something went wrong');
            setMessages({
                loading: false,
                items: [],
            });
        }
    }

    useEffect(() => {
        loadMessage();
    }, [counter])

    let content = <h5>Loading...</h5>
    if (!messages.loading && messages.items.length == 0) {
        content = <h5>No message added</h5>
    } 
    else if (!messages.loading) {
        const messageElements = messages
            .items
            .map((message, index) => <Message 
                message={message} 
                key={index} 
                reloadMessageList={reloadMessageList} 
            />)

        content = (
            <ul className="list-group">
                {messageElements}
            </ul>
        )
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default  MessageList;