import React from 'react';
import { useMouse } from './../hooks';

export default function Cat(props) {
  const [x, y] = useMouse();
  return (
    <img
      src="https://i.pinimg.com/originals/45/a9/2d/45a92df66675e0c9066a1f5bdac8d905.jpg"
      style={{
        width: '100px',
        position: 'absolute',
        left: x,
        top: y,
      }}
    />
  );
}
