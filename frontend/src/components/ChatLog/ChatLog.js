import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MessageBox from '../MessageBox';
import MyMessageBox from '../MyMessageBox';

import './ChatLog.css';

function ChatLog({ socket }) {
  const messages = useSelector(state => state.messages);
  const ownerId = useSelector(state => state.ownerId);
  const [socketUse, setSocketUse] = useState(true);

  const dispatch = useDispatch();
  const chatScroller = useRef(null);

  useEffect(() => {
    if (socket !== undefined && socket !== '' && socketUse && dispatch !== undefined) {
      socket.on('newMessage', message => {
        dispatch({ type: 'NEW_MESSAGE', payload: message })
      });
      setSocketUse(false);
    }
  }, [socket, socketUse, setSocketUse, dispatch]);

  useEffect(() => {
    chatScroller.current.scrollIntoView();
  }, [messages]);

  return (
    <div className="ChatLog">
      {messages.map(
        message => message.ownerId === ownerId ?
          <MyMessageBox text={message.text} time={message.time} key={message._id} />
          :
          <MessageBox owner={message.owner} text={message.text} time={message.time} key={message._id} />
      )}
      <div className="FocusDiv" ref={chatScroller} />
    </div>
  );
}

export default ChatLog;