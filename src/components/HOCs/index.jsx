import React from 'react';
import { UserContext } from '../../contexts';

export const withUser = WrappedComponent => {
  return function (props) {
    return (
      <UserContext.Consumer>
        {([user, setUser]) => (
          <WrappedComponent user={user} setUser={setUser} {...props} />
        )}
      </UserContext.Consumer>
    );
  };
};

export function withMouse(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        x: 0,
        y: 0,
      };
    }

    handleMouseMove = ({ clientX: x, clientY: y }) => {
      this.setState({
        x,
        y,
      });
    };

    componentDidMount() {
      document.body.addEventListener('mousemove', this.handleMouseMove);
    }

    componentWillUnmount() {
      document.body.removeEventListener('mousemove', this.handleMouseMove);
    }

    render() {
      return <WrappedComponent {...this.props} mouse={this.state} />;
    }
  };
}
