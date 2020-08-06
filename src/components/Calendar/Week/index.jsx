import React from 'react';

function Week(props) {
  const { year, week } = props;
  return (
    <div>
      {year}-{week}
    </div>
  );
}

export default Week;
