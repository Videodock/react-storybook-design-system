import React from 'react';
import classes from './Header.styles';

const Header = ({ children }) => {
  return (
    <header className={classes.root}>
      {children}
    </header>
  );
};

export default Header;
