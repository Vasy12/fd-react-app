import React from 'react';
import PropTypes from 'prop-types';

import Month from './Month';

const Calendar = props => {
  const { currentDate } = props;
  return (
    <article>
      <section></section>
      <section>
        <Month year={2020} month={10} />
      </section>
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
