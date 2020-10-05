import React, { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [startTime, setStartTime] = useState<number>();
  const [finishTime, setFinishTime] = useState<number>();
  const [timer, setTimer] = useState<number>(0);

  useEffect(() => {
    if (!startTime) return;

    let intervalId: number;
    if (!finishTime) {
      intervalId = window.setInterval(() => {
        setTimer((time)=> time + 1);
      }, 1000)
    }

    return () => {
      clearInterval(intervalId);
    }
  }, [startTime, finishTime]);

  return (
    <div className="App">
      <button onClick={() => setStartTime(Date.now())}>Start</button>
      <button onClick={() => setFinishTime(Date.now())}>Stop</button>

      {startTime && <p>{timer}s</p>}
      {startTime && finishTime && (
        <p>Duration:  {finishTime - startTime} milliseconds</p>
      )}
    </div>
  );
}

export default App;
