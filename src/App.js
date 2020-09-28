import React, { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(5);

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function countWords(text) {
    const wordsArr = text.trim().split(" ");
    const filtered = wordsArr.filter((word) => word !== "");

    console.log(filtered.length);
  }

  useEffect(() => {
    if (timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    }
  }, [timeRemaining]);

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea value={text} onChange={handleChange} />
      <h4>Time Remaining: {timeRemaining}</h4>
      <button onClick={() => countWords(text)}>Start</button>
      <h1>Word Count:</h1>
    </div>
  );
}

export default App;
