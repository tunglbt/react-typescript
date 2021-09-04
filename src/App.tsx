import React from 'react';
import './App.css';
import 'fontsource-roboto';
import Router from 'src/core/utils/routes';
import { createTheme, ThemeProvider } from '@mui/material';
import { green } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: green[600]
        }
    }
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router/>
        </ThemeProvider>
    );
}

export default App;
