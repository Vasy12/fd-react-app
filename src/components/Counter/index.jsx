import React, { Component, PureComponent } from 'react';
import _ from 'lodash';
class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    const { count } = this.state;
    const { step } = this.props;

    this.setState({
      count: count + step,
    });
  };

  decrement = () => {
    const { count } = this.state;
    const { step } = this.props;
    this.setState({
      count: count - step,
    });
  };

  setSomeCounter = () => {
    const { count } = this.state;
    this.setState({
      count,
    });
  };

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.count !== nextState.count;
  }

  render() {
    const { count } = this.state;
    return (
      <article>
        <h1>{count}</h1>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.increment}>+</button>
        <button onClick={this.setSomeCounter}>set state</button>
      </article>
    );
  }
}

Counter.propTypes = {
  step: function (props, propName) {
    const value = props[propName];
    if (
      typeof value !== 'number' ||
      Number.isNaN(value) ||
      !Number.isFinite(value)
    ) {
      return new Error(`${value} is not valid number value`);
    }
  },
};

Counter.defaultProps = {
  step: 1,
};

export default Counter;
