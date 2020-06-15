import React from 'react';
import timeFormat from 'dateformat';

import './MessageBox.css';

function MessageBox({ owner, text, time }) {
  return (
    <div className="Message MessageBox">
      <b>{owner}</b><br />
      {text}<br />
      <div className="Time">
        {timeFormat(time, 'yyyy/mm/dd hh:MM tt')}<br />
      </div>
    </div>
  );
}

export default MessageBox;