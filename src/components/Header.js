import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Blog App
        </Typography>
        <ThemeSwitcher />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
