import React from 'react';

const Aloha = props => {
  const { name, isGreeting } = props;

  if (isGreeting) {
    return <h1>Hello {name}</h1>;
  }

  return <strong>Goodbye {name}</strong>;
};

export default Aloha;
