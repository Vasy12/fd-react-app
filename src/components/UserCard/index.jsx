import React from 'react';
import PropTypes from 'prop-types';
import UserCardImage from './UserCardImage';
import styles from './UserCard.module.scss';

function UserCard(props) {
  const {
    picture: { large },
    name,
  } = props;

  return (
    <article className={styles.container}>
      <div className={styles.innerWrapper}>
        <section className={styles.frontSide}>
          <UserCardImage name={name} src={large} />
        </section>
        <section className={styles.backSide}></section>
      </div>
    </article>
  );
}

UserCard.propTypes = {
  id: PropTypes.object.isRequired,
  gender: PropTypes.oneOf(['male', 'female', null]),
  name: PropTypes.object.isRequired,
  email: PropTypes.string.isRequired,
  picture: PropTypes.shape({
    large: PropTypes.string,
    medium: PropTypes.string,
    thumbnail: PropTypes.string,
  }).isRequired,
};

export default UserCard;
