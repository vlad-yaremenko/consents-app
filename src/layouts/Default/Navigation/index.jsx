import React from 'react';
import { NavLink } from "react-router-dom";
import { List, ListItem } from '@material-ui/core';
import classes from './styles.module.scss';

function ListItemLink(props) {
  const CustomLink = React.useMemo(() =>
    React.forwardRef((linkProps, ref) => (
      <NavLink activeClassName={classes.linkActive} ref={ref} to={props.to} {...linkProps} />
    )),
    [props.to],
  );

  return (
    <ListItem button component={CustomLink}>
      {props.children}
    </ListItem>
  );
}

const Component = () => {
  return (
    <nav>
      <List>
        <ListItemLink to="/give-consent">
          Give consent
        </ListItemLink>
        <ListItemLink to="/consents">
          Collected consents
        </ListItemLink>
      </List>
    </nav>
  );
};
Component.displayName = 'Navigation';

export default Component;
