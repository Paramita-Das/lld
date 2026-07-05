import React from 'react';
import './chat-app.css';

const Chat = () => {
  return (
    <div>
        Chat App
        <div className='header'>
            <div className='group-info'>
            <img src="" alt="Profile picture" />
            <div className='group-details'>
            <p>GroupName</p>
            <p>Typing...</p>
            </div>
            </div>
            <div className='user-info'>
                <p>Signed in as User</p>
            </div>
        </div>
        <div className='chat-input'>
            <input type="text" placeholder='Type a message...' />
            <button>Send</button>
        </div>

    </div>
  )
}

export default Chat