import React, { useMemo, useState, useEffect, useReducer } from 'react';

import { format } from 'date-fns';

function testReducer(state, action) {
  switch (action.name) {
    case 'age': {
      return {
        ...state,
        age: Number(action.value),
      };
    }
    default:
      return {
        ...state,
        [action.name]: action.value,
      };
  }
}

const Test = () => {
  const [state, dispatch] = useReducer(testReducer, {
    firstName: '',
    lastName: '',
    age: 18,
    email: '',
    tel: '',
    birthday: format(new Date(), 'yyyy-MM-dd'),
  });

  const handleChange = ({ target: { name, value } }) => {
    dispatch({
      name,
      value,
    });
  };

  return (
    <>
      <input
        type="text"
        name="firstName"
        value={state.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        value={state.lastName}
        onChange={handleChange}
      />
      <input
        type="range"
        name="age"
        min={0}
        max={150}
        value={state.age}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={state.email}
        onChange={handleChange}
      />
      <input type="tel" name="tel" value={state.tel} onChange={handleChange} />
      <input
        type="date"
        name="birthday"
        value={state.birthday}
        onChange={handleChange}
      />
    </>
  );
};

export default Test;
