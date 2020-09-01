import { useState, useEffect } from 'react';

/**
 *
 * @param {function} getData
 * @returns {object}
 */
function useData(getData) {
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsFetching(true);
    getData()
      .then(setData, setError)
      .finally(() => {
        setIsFetching(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getData]);

  return {
    isFetching,
    data,
    error,
  };
}

export default useData;
