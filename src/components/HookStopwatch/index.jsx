import React, { useState, useEffect } from 'react';
import { startOfYear, addMilliseconds } from 'date-fns';
import { format } from 'date-fns/esm';

function Stopwatch() {
  const [time, setTime] = useState(startOfYear(new Date()));
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const intervalId = setInterval(() => {
        setTime(prevValue => addMilliseconds(prevValue, 1000));
      }, 990);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [isRunning]);

  const switchIsRunning = () => {
    setIsRunning(prevValue => !prevValue);
  };

  const resetTime = () => {
    setTime(prevValue => startOfYear(prevValue));
    setIsRunning(false);
  };

  return (
    <article>
      <h1>{format(time, 'HH:mm:ss:SSS')}</h1>
      <button onClick={switchIsRunning}>{isRunning ? 'stop' : 'start'}</button>
      <button onClick={resetTime}>reset</button>
    </article>
  );
}

export default Stopwatch;
