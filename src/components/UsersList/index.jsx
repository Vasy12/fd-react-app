import React, { Component } from 'react';
import UserListItem from './UserListItem';

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          firstName: 'Test',
          lastName: 'Testovich',
          isSelected: false,
        },
        {
          id: 2,
          firstName: 'Test2',
          lastName: 'Testovich2',
          isSelected: false,
        },
        {
          id: 3,
          firstName: 'Test3',
          lastName: 'Testovich3',
          isSelected: false,
        },
        {
          id: 4,
          firstName: 'Test4',
          lastName: 'Testovich4',
          isSelected: false,
        },
      ],
    };
  }
  onUserSelectHandler = index => {
    const { users } = this.state;
    const newUsers = [...users];
    newUsers[index].isSelected = !newUsers[index].isSelected;
    this.setState({
      users: newUsers,
    });
  };

  mapUser = (user, index) => (
    <UserListItem
      key={user.id}
      user={user}
      isSelected={user.isSelected}
      onSelect={() => this.onUserSelectHandler(index)}
    />
  );

  render() {
    const { users } = this.state;
    return <ul>{users.map(this.mapUser)}</ul>;
  }
}
export default UsersList;
