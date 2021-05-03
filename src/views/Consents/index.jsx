import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAll } from '@store/consents';
import PaginatedTable from './PaginatedTable';

const Component = () => {
  const consentsData = useSelector(state => state.consents.data);
  const dispatch = useDispatch();

  useEffect(() => {
    const promise = dispatch(fetchAll());
    return () => { promise.abort() };
  }, []);

  return (
    <PaginatedTable data={consentsData} />
  );
};
Component.displayName = 'Consents';

export default Component;
