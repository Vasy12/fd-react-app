import React, { useState, useDebugValue } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageHeader from './components/PageHeader';
import UsersPage from './pages/UsersPage';
import AppNav from './components/AppNav';
import Test from './components/Test';
import Chat from './components/Chat';

export const AppContext = React.createContext({});

const App = () => {
  const menuState = useState(false);

  return (
    <AppContext.Provider
      value={{
        menu: menuState,
      }}
    >
      <Router>
        <PageHeader />
        <AppNav />
        <Switch>
          <Route path="/" exact>
            <Test />
          </Route>
          <Route path="/chat" exact>
            <Chat />
          </Route>
          <Route path="/users">
            <UsersPage />
          </Route>
        </Switch>
      </Router>
    </AppContext.Provider>
  );
};

export default App;
