import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageWrapper.module.scss';

function ImageWrapper(props) {
  const { width, height, style, ...rest } = props;

  console.group('REST');
  console.log('Rest', rest);
  console.groupEnd();

  const inlineStyles = {
    ...style,
    width,
    height,
  };
  return <div style={inlineStyles} {...rest} />;
}

ImageWrapper.propTypes = {
  // content
  children: PropTypes.element.isRequired,
  // sizes
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  // styles
  className: PropTypes.string,
  style: PropTypes.object,
};

ImageWrapper.defaultProps = {
  // default styles
  className: styles.wrapper,
  style: {},
};

export default ImageWrapper;
