import React, { useState, useEffect, useRef } from "react";

function App() {
  const STARTING_TIME = 10;

  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const textareaRef = useRef(null);

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function countWords(text) {
    const wordsArr = text.trim().split(" ");
    const filtered = wordsArr.filter((word) => word !== "");
    return filtered.length;
  }

  function startGame() {
    setIsTimeRunning(true);
    setText("");
  }

  function endGame() {
    setIsTimeRunning(false);
    const numWords = countWords(text);
    setWordCount(numWords);
    setTimeRemaining(STARTING_TIME);
  }

  useEffect(() => {
    if (timeRemaining > 0 && isTimeRunning) {
      setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
      textareaRef.current.focus();
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, isTimeRunning]);

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        ref={textareaRef}
        disabled={!isTimeRunning}
        value={text}
        onChange={handleChange}
      />
      <h4>Time Remaining: {timeRemaining}</h4>
      <button disabled={isTimeRunning} onClick={startGame}>
        Start
      </button>
      <h1>Word Count: {wordCount}</h1>
    </div>
  );
}

export default App;
