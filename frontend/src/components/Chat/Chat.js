import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import io from 'socket.io-client';


import ChatLog from '../ChatLog';
import MessageSender from '../MessageSender';

import './Chat.css';

function Chat() {
  const [name, setName] = useState('');
  const [socket, setSocket] = useState('');
  const [socketOn, setSocketOn] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (socket === '')
      setSocket(io('http://localhost:3333'));
    else if (socket !== '' && socketOn && dispatch !== undefined) {
      socket.on('newConnection', data => {
        console.log(data);
        dispatch({ type: 'CONNECT', payload: data });
      });
      setSocketOn(false);
    }
  }, [socket, dispatch, socketOn]);

  return (
    <div className="Chat">
      <div className="Titulo">
        React Chat App
      </div>
      <div className="Descricao">
        This a simple realtime chat. Developer: Ayres Monteiro.
      </div>
      <input
        className='NameInput'
        name='nameInput'
        value={name}
        placeholder='Username'
        onChange={e => setName(e.target.value)}
      /><br />
      <ChatLog socket={socket} />
      <MessageSender owner={name} socket={socket} />
    </div>
  );
}

export default Chat;