import React from 'react';
import { Button } from '@material-ui/core';

const Component = (props) => (
  <Button variant="contained" color="primary" {...props}>{props.children}</Button>
);
Component.displayName = 'Button';

export default Component;
