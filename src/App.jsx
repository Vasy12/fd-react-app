import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styles from './App.module.scss';
import UsersLoader from './components/UsersLoader';
const PageHeader = props => {
  return <header className={styles.header} {...props} />;
};

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/users'}>USERS</Link>
        </li>
        <li>
          <Link to={'/contacts'}>Contacts</Link>
        </li>
      </ul>
    </nav>
  );
};

const PageFooter = () => {
  return <footer className={styles.footer}></footer>;
};

const Page = props => {
  return (
    <>
      <PageHeader>
        <Navigation />
      </PageHeader>
      {props.children}
      <PageFooter />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/contacts">
          <Page>
            <ContactsPage />
          </Page>
        </Route>
        <Route path="/users">
          <Page>
            <UsersLoader />
          </Page>
        </Route>
        <Route path="/">
          <Page>
            <HomePage />
          </Page>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

function HomePage() {
  return <h1>HOME</h1>;
}

function ContactsPage() {
  return <h1>CONTACTS</h1>;
}

function AboutPage() {
  return <h1>ABOUT</h1>;
}
