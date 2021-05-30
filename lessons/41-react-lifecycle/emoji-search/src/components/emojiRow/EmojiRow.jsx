import "./EmojiRow.css";
import React from "react";

function EmojiRow(props) {
  return (
    <div className="emoji-row">
      <span className='emoji-img'>{props.img} </span>
      <span className='emoji-title'>{props.title}</span>
    </div>
  );
}

export default EmojiRow;
