import React, { Component } from 'react';
import Child from './Child';

export default class Parent2 extends Component {
  render() {
    return (
      <div>
        <h3>Parent2</h3>
        <Child />
      </div>
    );
  }
}
