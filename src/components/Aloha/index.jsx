import React from 'react';
import './styles.css';
const Aloha = props => {
  const { name, isGreeting } = props;

  return (
    <h1 className={'container'}>
      {isGreeting ? 'hello' : 'bye'} {name}
    </h1>
  );
};

export default Aloha;
