import React, { useState } from 'react';
import Screen from './components/Screen';

const App = () => {
  const [isScreenVisible, setIsScreenVisible] = useState(true);
  return (
    <>
      <button onClick={() => setIsScreenVisible(!isScreenVisible)}>
        Switch visible
      </button>
      {isScreenVisible ? <Screen /> : <h1>Component Will Unmount</h1>}
    </>
  );
};

export default App;
