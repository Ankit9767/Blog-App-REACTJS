import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Header from './components/Header';
import BlogForm from './components/BlogForm';
import BlogList from './components/BlogList';
import darkTheme from './themes/darkTheme';
import lightTheme from './themes/lightTheme';

const App = () => {
  const darkMode = useSelector((state) => state.darkMode);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Header />
      <div className="container">
        <BlogForm />
        <BlogList />
      </div>
    </ThemeProvider>
  );
};

export default App;
