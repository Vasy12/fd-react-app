import React from 'react';
import PropTypes from 'prop-types';
import UserCard from '../UserCard';

function UsersList(props) {
  const { users } = props;

  return (
    <ol>
      {users.map(u => {
        return <li key={u.email}>{<UserCard {...u} />}</li>;
      })}
    </ol>
  );
}

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default UsersList;
