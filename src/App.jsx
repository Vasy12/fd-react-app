import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styles from './App.module.scss';
import UsersLoader from './components/UsersLoader';
import Counter from './components/Counter';
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
          <Link to={'/counter'}>COUNTER</Link>
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
  const [step, setStep] = useState(1);

  return (
    <Router>
      <Switch>
        <Route path="/counter">
          <Page>
            <input
              value={step}
              type="number"
              onChange={e => void setStep(+e.target.value)}
            />
            <Counter step={step} />
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
