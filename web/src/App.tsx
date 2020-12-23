import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import './App.scss';
import Routes from './Routes';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#EB5B5B',
    },
    secondary: {
      main: '#323232',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app-container">
        <Routes/>
      </div>
    </ThemeProvider>
  );
}

export default App;
