import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { stringToHexColor } from './../../utils/color';
import styles from './UserCard.module.scss';

function UserCardImage(props) {
  const {
    name: { title, first, last },
    name,
    src,
  } = props;

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    const img = new Image();
    img.addEventListener('load', () => setIsLoaded(true));
    img.src = src;
  }, [src]);

  const backgroundColor = useMemo(
    () => stringToHexColor(`${title ?? ''}${first ?? ''}${last ?? ''}`),
    [name]
  );

  const containerStyle = {
    backgroundColor,
  };

  return (
    <div style={containerStyle} className={styles.imageWrapper}>
      {isLoaded ? (
        <img src={src} alt={`${first} ${last} image`} />
      ) : (
        <span>
          {first[0] ?? ''} {last[0] ?? ''}
        </span>
      )}
    </div>
  );
}

UserCardImage.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.shape({
    title: PropTypes.string.isRequired,
    first: PropTypes.string.isRequired,
    last: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserCardImage;
