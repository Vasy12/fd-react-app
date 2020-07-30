import React, { Component } from 'react';
import Aloha from './components/Aloha';

let counter = 0;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isGreetingMode: true,
      guests: [
        {
          id: 1,
          firstName: 'Test',
          lastName: 'Testovich',
        },
        {
          id: 2,
          firstName: 'Masha',
          lastName: 'Ivanova',
        },
        {
          id: 3,
          firstName: 'Misha',
          lastName: 'Testovich',
        },
        {
          id: 4,
          firstName: 'Vasya',
          lastName: 'Terkin',
        },
      ],
    };
    this.switchSort = false;
    console.group('constructor');
    console.log('counter = ', ++counter);
    console.groupEnd();
  }

  changeMode = () => {
    const { isGreetingMode } = this.state;
    this.setState({
      isGreetingMode: !isGreetingMode,
    });
  };

  sortGuest = () => {
    const { guests } = this.state;
    const newGuests = guests.map(g => JSON.parse(JSON.stringify(g)));

    this.setState({
      guests: newGuests.sort(({ firstName: name1 }, { firstName: name2 }) => {
        if (name1 < name2) {
          return this.switchSort ? 1 : -1;
        } else if (name1 > name2) {
          return this.switchSort ? -1 : 1;
        }
        return 0;
      }),
    });
    this.switchSort = !this.switchSort;
  };

  mapGuests = () =>
    this.state.guests.map(({ id, firstName, lastName }) => (
      <li key={id}>
        <Aloha
          name={`${firstName} ${lastName}`}
          isGreeting={this.state.isGreetingMode}
        />
      </li>
    ));

  render() {
    console.group('render');
    console.log('counter = ', ++counter);
    console.groupEnd();

    const {
      state: { isGreetingMode },
      changeMode,
      sortGuest,
      mapGuests,
    } = this;

    return (
      <>
        {isGreetingMode && <div>Conditional render</div>}
        <button onClick={changeMode}>Change mode</button>
        <button onClick={sortGuest}>Sort guests</button>
        <ul>{mapGuests()}</ul>
      </>
    );
  }
}

export default App;
