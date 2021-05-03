import React, { useState } from 'react';
import { Button } from '@components';
import { TextField, Box } from '@material-ui/core';
import AgreeToCheckboxes from './AgreeToCheckboxes';
import classes from './styles.module.scss';

const Component = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [agreeTo, setAgreeTo] = useState([]);

  const reset = () => {
    setName('');
    setEmail('');
    setAgreeTo([]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email && agreeTo.length) {
      props.onSubmit({
        name,
        email,
        agreeTo
      }).then(reset);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <Box mb={2}>
        <TextField
          type="text"
          value={name}
          onInput={e => setName(e.target.value)}
          required
          placeholder="Name"
        />
        <TextField
          type="email"
          value={email}
          onInput={e => setEmail(e.target.value)}
          required
          placeholder="Email address"
        />
      </Box>

      <Box my={2}>
        <AgreeToCheckboxes values={agreeTo} onChange={setAgreeTo} />
      </Box>

      <Box mt={2}>
        <Button type="submit" disabled={!agreeTo.length}>Give consent</Button>
      </Box>
    </form>
  );
};
Component.displayName = 'Form';

export default Component;
