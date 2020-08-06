import React, { Component } from 'react';
import Slide from './Slide';

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFullScreen: false,
      currentIndex: 0,
      isPlaying: false,
    };
  }

  render() {
    const { slides, aspectRatio } = this.props;
    const { currentIndex } = this.state;
    return (
      <div>
        <div>
          {slides.map((item, index) => (
            <Slide
              slide={item}
              isCurrent={index === currentIndex}
              download={Math.abs(index - currentIndex) < 2}
            />
          ))}
        </div>

        <button>{'<<'}</button>
        <button>{'>>'}</button>
      </div>
    );
  }
}

export default Carousel;
