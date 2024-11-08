import React from "react";
import { useState } from "react";

function Words_Chanr() {
  const [word, setWord] = useState(0);
  const [char, setChar] = useState(0);
  const [text, setText] = useState("");

  const charCount = (a) => {
    let length = 0;
    a = a.trim();
    for (let i = 0; i < a.length; i++) {
      length++;
    }
    return length;
  };

  const wordCount = (a) => {
    let length = 0;
    a = a.trim().split(" ");
    for (let i = 0; i < a.length; i++) {
      length++;
    }
    return length;
  };

  const textRemove = () => {
    setChar(0);
    setWord(0);
    setText("");
  };

  const texting = (e) => {
    let a = e.target.value;
    setChar(charCount(a));
    setWord(wordCount(a));
    setText(a);
  };

  const wordRemove = () => {
    let word = text.trim().split(" ");
    word.pop();
    let updateWord=word.join()
    setText(updateWord);
    setChar(charCount(updateWord))
    setWord(wordCount(updateWord))
  };

  const last_textRemove=()=>{
    let word=text.slice(0,-1)
    setText(word)
    setChar(charCount(word))
    setWord(wordCount(word))

  }

  return (
    <div>
      <textarea value={text} onChange={texting}></textarea>
      <br />
      <label htmlFor="">No of Char :</label>
      <h1>{char}</h1>
      <label htmlFor="">No of Words :</label>
      <h1>{word}</h1>

      <button onClick={textRemove}>Remove Text</button>
      <button onClick={wordRemove}>Remove Last Word</button>
      <button onClick={last_textRemove}>Remove Last Text</button>
    </div>
  );
}

export default Words_Chanr;
