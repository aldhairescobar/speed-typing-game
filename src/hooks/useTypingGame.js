import { useState, useRef, useEffect } from "react";

function useTypingGame(startingTime = 10) {
  const [text, setText] = useState("");
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(startingTime);
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
    setTimeRemaining(startingTime);
  }

  /* textareaRef focus the textbox when game start */
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

  return {
    textareaRef,
    isTimeRunning,
    text,
    handleChange,
    timeRemaining,
    startGame,
    wordCount,
  };
}

export default useTypingGame;
