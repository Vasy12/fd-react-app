import React from 'react';
import styles from './Slide.module.scss';
import classNames from 'classnames';

class Slide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: new Image(),
      isLoaded: false,
    };
    this.state.img.addEventListener('load', this.handleLoad);
    this.state.img.addEventListener('error', this.handleError);
  }

  handleLoad = e => {
    this.setState({
      isLoaded: true,
    });
  };
  handleError = e => {
    this.setState({
      isLoaded: false,
    });
  };

  load = () => {
    const { img } = this.state;
    const {
      slide: { src },
    } = this.props;
    img.src = src;
  };

  componentDidUpdate(prevProps, prevState) {
    const { isLoaded } = this.state;
    const { download } = this.props;
    if (!isLoaded && download) {
      this.load();
    }
  }

  render() {
    const { isLoaded, img } = this.state;
    const { slide, isCurrent, aspectRatio } = this.props;

    const className = classNames(styles.slide, {
      [styles.currentSlide]: isCurrent,
    });

    const imgStyle = {
      [aspectRatio > img.width / img.height ? 'height' : 'width']: '100%',
    };

    return (
      <figure className={className}>
        <img
          style={imgStyle}
          src={isLoaded ? slide.src : 'plan B src'}
          alt={slide.title}
          onError={this.handleError}
        />

        <figcaption>
          <h3>{slide.title}</h3>
          <p>{slide.description}</p>
        </figcaption>
      </figure>
    );
  }
}

export default Slide;
