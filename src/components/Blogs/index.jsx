import React from 'react';
import styles from './Blogs.module.scss';
import classNames from 'classnames';
import { ThemeContext } from '../../contexts';
import { THEME_VALUES } from '../../constants';

export default function Blogs(props) {
  const { blogs } = props;
  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        const containerClassName = classNames(styles.container, {
          [styles.lightTheme]: theme === THEME_VALUES.LIGHT,
          [styles.darkTheme]: theme === THEME_VALUES.DARK,
        });
        return (
          <section className={containerClassName}>
            <h1>Blogs</h1>
            {blogs.map((b, index) => (
              <article key={index}>
                <h2>{b.title}</h2>
                <p>{b.body}</p>
              </article>
            ))}
          </section>
        );
      }}
    </ThemeContext.Consumer>
  );
}
