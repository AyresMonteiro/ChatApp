import React from 'react';
import timeFormat from 'dateformat';

import './MyMessageBox.css';

function MyMessageBox({ text, time }) {
  return (
    <div className="Message MyMessageBox">
      <b>You</b><br />
      {text}<br />
      <div className="Time">
        {timeFormat(time, 'yyyy/mm/dd hh:mm tt')}<br />
      </div>
    </div>
  );
}

export default MyMessageBox;