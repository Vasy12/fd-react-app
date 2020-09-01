import React, { useContext } from 'react';
import { AppContext } from '../../App';
import styles from './PageHeader.module.scss';

function PageHeader(props) {
  const {
    menu: [, setIsMenuOpen],
  } = useContext(AppContext);

  return (
    <header className={styles.container}>
      <button
        onClick={() => {
          setIsMenuOpen(true);
        }}
      >
        open menu
      </button>
    </header>
  );
}

export default PageHeader;
