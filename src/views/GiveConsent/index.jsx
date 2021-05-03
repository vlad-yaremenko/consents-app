import React from 'react';
import { useDispatch } from 'react-redux';
import { add as addConsents } from '@store/consents';
import Form from './Form';

const Component = () => {
  const dispatch = useDispatch();
  const handleSubmit = (data) => {
    return dispatch(addConsents(data));
  };

  return (
    <Form onSubmit={handleSubmit} />
  );
};
Component.displayName = 'GiveConsent';

export default Component;
