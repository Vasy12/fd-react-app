import React, { useState, useEffect } from 'react';
import { addSeconds, format, startOfDay } from 'date-fns';

function Stopwatch() {
  const [time, setTime] = useState(startOfDay(new Date()));
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const idValue = setTimeout(() => {
        setTime(addSeconds(time, 1));
      }, 1000);
      return () => {
        clearTimeout(idValue);
      };
    }
  }, [isRunning, time]);

  return (
    <article>
      <h1>{format(time, 'HH:mm:ss')}</h1>
      <button
        onClick={() => {
          setIsRunning(!isRunning);
        }}
      >
        {isRunning ? 'stop' : 'start'}
      </button>
      <button
        onClick={() => {
          setTime(startOfDay(new Date()));
        }}
      >
        reset
      </button>
    </article>
  );
}

export default Stopwatch;
