import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Counter = props => {
  const { step } = props;
  const [countValue, setCounterValue] = useState(0);

  const increment = () => {
    setCounterValue(countValue + step);
  };

  const decrement = () => {
    setCounterValue(countValue - step);
  };

  return (
    <article>
      <h1>{countValue}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </article>
  );
};

Counter.propTypes = {
  step: PropTypes.number,
};

Counter.defaultProps = {
  step: 1,
};

export default React.memo(Counter, (prevProps, nextProps) => {
  return !_.isEqual(_.omit(prevProps, ['step']), _.omit(nextProps, ['step']));
});
