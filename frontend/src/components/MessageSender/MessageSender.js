import React, { useState } from 'react';
import { useAlert } from 'react-alert';

import './MessageSender.css';

function MessageSender({ owner, socket }) {
  const [msg, setMsg] = useState('');
  const alert = useAlert();

  async function sendMsg() {
    if (socket !== '' && msg.length && owner.length) {
      socket.emit('sendMessage', { owner, text: msg });
      setMsg('');
    }
    else if (owner.length === 0)
      // alert.show('Insira um nome!');
      alert.show('Insira um nome de usuário!');
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