import React, { useState } from 'react';
import Stopwatch from './components/HookStopwatch';

export default function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <button onClick={() => void setIsVisible(!isVisible)}>
        switch visible
      </button>
      {isVisible && <Stopwatch />}
    </>
  );
}
