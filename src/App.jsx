import React from 'react';
import { SignUpForm } from './components/forms';

export default function App() {
  return (
    <SignUpForm
      onSubmit={(values, toolBox) => {
        console.log(values);
      }}
    />
  );
}
