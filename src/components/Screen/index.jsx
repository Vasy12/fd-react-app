import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Screen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  handleResize = ({ target: { innerHeight, innerWidth } }) => {
    this.setState({
      width: innerWidth,
      height: innerHeight,
    });
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    const { width, height } = this.state;
    return (
      <article>
        <table>
          <caption>VIEWPORT SIZES</caption>
          <thead>
            <tr>
              <th>Width</th>
              <th>Height</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{width}</td>
              <td>{height}</td>
            </tr>
          </tbody>
        </table>
      </article>
    );
  }
}

Screen.propTypes = {};

export default Screen;
