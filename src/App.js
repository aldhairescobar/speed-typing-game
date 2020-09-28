import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function countWords(text) {
    const wordsArr = text.trim().split(" ");
    const filtered = wordsArr.filter((word) => word !== "");

    console.log(filtered.length);
  }

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea value={text} onChange={handleChange} />
      <h4>Time Remaining:</h4>
      <button onClick={() => countWords(text)}>Start</button>
      <h1>Word Count:</h1>
    </div>
  );
}

export default App;
