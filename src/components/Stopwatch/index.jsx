import React, { Component } from 'react';
import LA_LA_BLA_BLA_BLA from './Stopwatch.module.css';

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRunning: false,
      time: new Date(0, 0, 0, 0, 0, 0, 0, 0),
    };
    this.timeoutId = null;
  }

  tick = () => {
    this.setState((state, props) => {
      const { time } = state;
      const newDate = new Date(time.getTime() + 1000);
      return {
        time: newDate,
      };
    });
  };

  start = () => {
    if (!this.state.isRunning) {
      this.setState({
        isRunning: true,
      });
    }
  };

  stop = () => {
    if (this.state.isRunning) {
      this.setState({
        isRunning: false,
      });
    }
  };

  clear = () => {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  };

  componentDidUpdate(prevProps, prevState) {
    const { isRunning } = this.state;
    this.clear();
    if (isRunning) {
      this.timeoutId = setTimeout(this.tick, 3000);
    }
  }

  componentWillUnmount() {
    this.clear();
  }

  componentDidMount() {
    this.start();
  }

  render() {
    const { time, isRunning } = this.state;

    return (
      <article className={LA_LA_BLA_BLA_BLA.wrapper}>
        <div className={LA_LA_BLA_BLA_BLA.time}>
          {time.toLocaleTimeString('it-IT')}
        </div>
        <button disabled={isRunning} onClick={this.start}>
          start
        </button>
        <button disabled={!isRunning} onClick={this.stop}>
          stop
        </button>
        <button>reset</button>
      </article>
    );
  }
}

export default Stopwatch;
