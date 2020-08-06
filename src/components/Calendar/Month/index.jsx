import React from 'react';
import PropTypes from 'prop-types';

import Week from './../Week';
import { getWeeksInMonth, getWeek } from 'date-fns';

const getWeeks = date => {
  const firstWeek = getWeek(date);
  const weeksNumber = getWeeksInMonth(date);
  const weeks = [];
  for (let i = firstWeek; i < weeksNumber + firstWeek; ++i) {
    weeks.push(
      <Week
        key={`${date.getFullYear()}-${i}`}
        year={date.getFullYear()}
        week={i}
      />
    );
  }
  return weeks;
};

function Month(props) {
  const { year, month, className } = props;

  return <div>{getWeeks(new Date(year, month, 1))}</div>;
}

Month.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default Month;
