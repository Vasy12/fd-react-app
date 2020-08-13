import React from 'react';
import PropTypes from 'prop-types';

const getMonthWeeks = date => {
  const weeks = [];
  weeks.push(
    <Week>
      <CalendarDate date={} currentDate={currentDate} />
      <CalendarDate date={} currentDate={currentDate} />
      <CalendarDate date={} currentDate={currentDate} />
      <CalendarDate date={} currentDate={currentDate} />
      <CalendarDate date={} currentDate={currentDate} />
      <CalendarDate date={} currentDate={currentDate} />
      <CalendarDate date={} currentDate={currentDate} />
    </Week>
  );

  return weeks;
};

const Calendar = props => {
  const { currentDate } = props;

  return (
    <article>
      <Month>{getMonthWeeks(currentDate)}</Month>
    </article>
  );
};

Calendar.propTypes = {
  currentDate: PropTypes.instanceOf(Date),
};

Calendar.defaultProps = {
  currentDate: new Date(),
};

export default Calendar;
