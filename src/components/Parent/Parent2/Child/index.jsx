import React from 'react';
import { AppContext } from './../../../../contexts';

class Child extends React.Component {
  render() {
    const userValueFromContext = this.context;

    return (
      <div>
        <h4>Child: {JSON.stringify(userValueFromContext, null, '\t')}</h4>
      </div>
    );
  }
}

Child.contextType = AppContext;

export default Child;
