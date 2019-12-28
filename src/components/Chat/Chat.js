import React, { Component } from 'react';

import './Chat.css';

class Chat extends Component {
    componentWillUpdate() {
        console.log('se actuañiza');
        // document.getElementById('scroll').scrollTop =  document.getElementById('scroll').scrollHeight

        window.scrollTo(0,1e10);


    }
  
getMessages() {
    const { messages } = this.props;
    return (
        messages.map((item, index) => {
            return (
                <li key={index} className={item.id}>
                    <div className="avatar"><img src={item.id === 'self' ? 'https://i.imgur.com/HYcn9xO.png' : 'https://i.imgur.com/DY6gND0.png'} draggable="false" alt="" /></div>
                    <div className="msg">
                        <p>{item.message}</p>
                        <time>{item.time}</time>
                    </div>
                </li>
            )
        })
    )
}
render() {
    const {
        messages
    } = this.props;
    let chat = undefined;
    if (messages) {
        chat = this.getMessages();
    }
    return (
        <div className="chat-container">
            <ul id="scroll" className="chat">
                {chat}
            </ul>
        </div>
    )
}
}

export default Chat;