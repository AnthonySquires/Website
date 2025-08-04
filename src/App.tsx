import type { ReactElement } from 'react';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import { THEME_ID, ThemeProvider, createTheme } from '@mui/material/styles';

import LandingPage from './LandingPage';

const materialTheme = createTheme({
  palette: {
    primary: {
      contrastText: '#fff',
      main: '#00ac9d',
    },
    secondary: {
      main: '#0064ac',
    },
  },
  typography: {
    fontFamily: 'Inter,sans-serif',
  }
})

function App(): ReactElement {
  return (
    <ScopedCssBaseline>
      <ThemeProvider theme={{ [THEME_ID]: materialTheme }}>
        <LandingPage />
      </ThemeProvider>
    </ScopedCssBaseline>
  )
}

export default App;
