import React from 'react';
import PropTypes from 'prop-types';
import styles from './TasksList.module.scss';
import classNames from 'classnames';

function TasksList(props) {
  return <ul {...props}></ul>;
}

TasksList.propTypes = {
  tasks: PropTypes.array,
  className: PropTypes.string,
};

TasksList.defaultProps = {
  tasks: [],
  className: styles.defaultClass,
};

export default TasksList;
