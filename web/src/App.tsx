import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import './App.scss';
import { AuthProvider } from './context/auth.context';
import Routes from './routes';

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
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <div className="app-container">
          <Routes />
        </div>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
