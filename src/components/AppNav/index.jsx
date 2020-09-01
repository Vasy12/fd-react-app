import React, { useContext, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../App';
import styles from './AppNav.module.scss';

function AppNav() {
  const {
    menu: [isMenuOpen, setIsMenuOpen],
  } = useContext(AppContext);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = ({ target }) => {
      if (isMenuOpen && !wrapperRef.current.contains(target)) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [wrapperRef.current, isMenuOpen]);

  const className = classNames(styles.menu, { [styles.menuOpen]: isMenuOpen });

  return (
    <nav ref={wrapperRef} className={className}>
      <button onClick={() => setIsMenuOpen(false)}>close</button>
      <ul>
        <li>
          <NavLink
            to="/users"
            className={styles.link}
            activeClassName={styles.linkActive}
          >
            Users
          </NavLink>
          <br />
          <NavLink
            to="/chat"
            className={styles.link}
            activeClassName={styles.linkActive}
          >
            Chat
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
