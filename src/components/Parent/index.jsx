import React, { Component } from 'react';
import Parent2 from './Parent2';

class Parent1 extends Component {
  render() {
    return (
      <div>
        <h2>Parent 1</h2>
        <Parent2 />
      </div>
    );
  }
}
export default Parent1;
