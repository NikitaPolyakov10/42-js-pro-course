import "./EmojiContainer.css";
import React from "react";
import EmojiRow from "../emojiRow/EmojiRow";

const EmojiContainer = ({ emojiList = [] }) => {
  return (
    <div className="emoji-container">
      {emojiList.map((item) => {
        return (
          <EmojiRow key={item.title} img={item.symbol} title={item.title} />
        );
      })}
    </div>
  );
}

export default EmojiContainer;
