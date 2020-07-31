import React, { Component } from 'react';
import UsersList from './components/UsersList';
import SelectedUsersList from './components/SelectedUsersList';
class App extends Component {
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

  setUsers = users => {
    this.setState({
      users,
    });
  };

  render() {
    const { users } = this.state;
    return (
      <>
        <UsersList users={users} setUsers={this.setUsers} />
        <SelectedUsersList users={users} />
      </>
    );
  }
}

export default App;
