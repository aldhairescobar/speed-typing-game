import React from "react";
import useTypingGame from "./hooks/useTypingGame";

function App() {
  const {
    textareaRef,
    isTimeRunning,
    text,
    handleChange,
    timeRemaining,
    startGame,
    wordCount,
  } = useTypingGame(15);

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
