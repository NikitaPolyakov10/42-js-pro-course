import "./EmojiRow.css";
import React from "react";

function EmojiRow({img, title}) {
  return (
    <div className="emoji-row">
      <span className='emoji-img'>{img}</span>
      <span className='emoji-title'>{title}</span>
    </div>
  );
}

export default EmojiRow;
