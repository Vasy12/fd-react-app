import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './LoginForm.module.css';
import sendIcon from './email-send.svg';
import Icon from '@mdi/react';
import { mdiSend } from '@mdi/js';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userEmail: '',
      userPass: '',
      isPassValid: null,
    };
  }

  handleEmailChange = ({ target: { value } }) => {
    this.setState({
      userEmail: value,
    });
  };

  handlePassChange = ({ target: { value } }) => {
    this.setState({
      userPass: value,
      isPassValid: /^\S+$/.test(value),
    });
  };
  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { userEmail, userPass, isPassValid } = this.state;

    const passInputClassNames = classNames(styles.input, {
      [styles.inputValid]: isPassValid,
    });

    return (
      <form onSubmit={this.handleSubmit} className={styles.container}>
        <input
          className={styles.input}
          value={userEmail}
          placeholder="email"
          type="email"
          name="user-email"
          onChange={this.handleEmailChange}
        />
        <input
          className={passInputClassNames}
          value={userPass}
          placeholder="password"
          type="password"
          name="user-pass"
          onChange={this.handlePassChange}
        />
        <button className={styles.sendButton} type="submit">
          <Icon path={mdiSend} size={'1em'} />
        </button>
      </form>
    );
  }
}

export default LoginForm;
