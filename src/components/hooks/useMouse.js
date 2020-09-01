import { useState, useEffect } from 'react';

const useMouse = () => {
  const [mouse, setMouse] = useState([0, 0]);

  useEffect(() => {
    const handleMouseMove = ({ clientX, clientY }) =>
      setMouse([clientX, clientY]);

    document.body.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return mouse;
};

export default useMouse;
