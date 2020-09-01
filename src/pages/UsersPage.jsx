import React, { useState, useCallback } from 'react';
import { getUsers } from './../api';
import { useData } from './../components/hooks';
import UsersList from './../components/UsersList';
import Spinner from '../components/Spinner';

function UsersPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const getData = useCallback(
    () =>
      getUsers({
        page: currentPage,
      }),
    [currentPage]
  );

  const { isFetching, data } = useData(getData);

  const prevPage = useCallback(() => {
    setCurrentPage(prevValue => (prevValue > 1 ? prevValue - 1 : prevValue));
  }, []);

  const nextPage = useCallback(() => {
    setCurrentPage(prevValue => prevValue + 1);
  }, []);
  return (
    <>
      {isFetching ? <Spinner /> : <UsersList users={data?.results ?? []} />}
      <button onClick={prevPage} disabled={currentPage === 1}>
        {'<<'}
      </button>
      <button>{currentPage}</button>
      <button onClick={nextPage}>{'>>'}</button>
    </>
  );
}

export default UsersPage;
