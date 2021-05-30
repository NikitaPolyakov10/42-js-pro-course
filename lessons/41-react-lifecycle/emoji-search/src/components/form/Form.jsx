import "./Form.css";
import React, { useState } from "react";
import useFetch from "../useFetch";
import EmojiContainer from "../emojiContainer/EmojiContainer";

const EMOJI_API =
  "https://raw.githubusercontent.com/asimonok/42-js-pro-course/lesson/41-react-lifecycle/lessons/41-react-lifecycle/emojiList.json";

const Form = () => {
  const [searchText, setSearchText] = useState('');
  const [foundEmojis, setFoundEmojis] = useState([]);
  const [select, setSelect] = useState('15');
  const [countSlice, setCountSlice] = useState(15);
  const { data} = useFetch(EMOJI_API);

  const filterEmoji = (value) => {
    if (value.length === 0) {
      setFoundEmojis([])
    } else {
      const filterData = data.filter(({ title, keywords }) => {
        if (title.toLowerCase().indexOf(value.toLowerCase()) !== -1 || keywords.split(' ').includes(value.toLowerCase()) ) {
          return true;
        }
        return false;
      });
      setFoundEmojis(filterData)
    }
  }

  const onChangeInput = (e) => {
    const value = e.target.value.trim();
    setSearchText(value);
    filterEmoji(value)
  }
  const onChangeSelect = (e) => {
    const value = e.target.value;
    setSelect(value);
    if (value === 'all') {
      setCountSlice(0)
    } else {
      setCountSlice(Number(value))
    }
  }

  const emojiList = countSlice > 0 ? foundEmojis.slice(0, countSlice) : foundEmojis;
  return (
    <>
      <h2>Emoji Search</h2>
      <div className="form">
        <div className="form-row">

          <input
            type="text"
            className="search-input"
            placeholder="Search emoji..."
            onChange={onChangeInput}
          />
          <select className="select-input" name="Size" value={select} onChange={onChangeSelect}>
            <option value="10">10 items</option>
            <option value="15">15 items</option>
            <option value="25">25 items</option>
            <option value="all">All</option>
          </select>
        </div>
        <EmojiContainer emojiList={emojiList} />
      </div>
    </>
  );
}

export default Form;
