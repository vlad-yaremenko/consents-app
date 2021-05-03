import React from 'react';
import Navigation from './Navigation';
import { BrowserRouter as Router, } from "react-router-dom";
import { Drawer, Container } from '@material-ui/core';
import classes from './styles.module.scss';

const Component = (props) => {
  return (
    <Router>
      <Drawer
        anchor="left"
        variant="permanent"
        open
        classes={{
          paper: classes.drawer
        }}
      >
        <Navigation />
      </Drawer>
      <main className={classes.content}>
        <Container>
          {props.children}
        </Container>
      </main>
    </Router>
  );
};
Component.displayName = 'DefaultLayout';

export default Component;
