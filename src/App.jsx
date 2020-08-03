import React, { Component } from 'react';
import Stopwatch from './components/Stopwatch';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: true,
    };
  }
  switchVisible = () => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  render() {
    const { isVisible } = this.state;
    return (
      <>
        <button onClick={this.switchVisible}>switch</button>
        {isVisible && <Stopwatch />}
      </>
    );
  }
}

export default App;
