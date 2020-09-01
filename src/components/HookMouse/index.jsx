import React, { useState, useEffect } from 'react';

function Mouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const mouseMoveHandler = ({ clientX, clientY }) => {
    setX(clientX);
    setY(clientY);
  };

  useEffect(() => {
    document.body.addEventListener('mousemove', mouseMoveHandler);
    console.log('1 Mouse Effect Mount');
    return () => {
      document.body.removeEventListener('mousemove', mouseMoveHandler);
      console.log('2 Mouse effect unmount');
    };
  }, [x]);

  useEffect(() => {
    console.log('sadf');
  });

  return (
    <>
      <div>X: {x}</div>
      <div>Y: {y}</div>
    </>
  );
}

export default Mouse;
