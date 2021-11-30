import React, { useState } from 'react';

import './MessageSender.css';

function MessageSender({ owner, socket }) {
  const [msg, setMsg] = useState('');

  async function sendMsg() {
    if (socket !== '' && msg.length && owner.length) {
      socket.emit('sendMessage', { owner, text: msg });
      setMsg('');
    } else if (owner.length === 0) {
      alert('Type a username!');
    }
  };

  return (
    <div className="MessageSender">
      <textarea
        className='TextInput'
        name='textInput'
        value={msg}
        placeholder='Enter a new message...'
        onChange={e => setMsg(e.target.value)}
      /><br />
      <button
        className='SendButton'
        onClick={sendMsg}
      >Send</button>
    </div>
  );
}

export default MessageSender;