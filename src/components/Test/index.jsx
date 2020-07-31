import React, { Component } from 'react';

class Test extends Component {
  constructor(props) {
    super(props);
    this.counter = 0;
    this.state = {
      ticks: 0,
    };

    console.log('constructor', ++this.counter);
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      console.log('tick');
      this.setState((state, props) => {
        return {
          ticks: state.ticks + 1,
        };
      });
    }, 1000);
    console.log('componentDidMount', ++this.counter);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', ++this.counter);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
    console.log('componentWillUnmount', ++this.counter);
    alert();
  }

  render() {
    console.log('render', ++this.counter);

    return (
      <>
        <button
          onClick={() => {
            console.log('setState', ++this.counter);
            this.setState({
              value: Math.random(),
            });
          }}
        >
          change state
        </button>
        <h1>{this.state.ticks}</h1>
      </>
    );
  }
}

export default Test;
