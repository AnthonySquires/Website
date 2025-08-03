import { ThemeProvider, THEME_ID, createTheme } from '@mui/material/styles';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import LandingPage from './LandingPage';

const materialTheme = createTheme({
  palette: {
    primary: {
      main: '#00ac9d',
      contrastText: "#fff"
    },
    secondary: {
      main: '#0064ac',
    },
  },
  typography: {
    fontFamily: 'Inter,sans-serif',
  }
});

function App() {
  return (
    <ScopedCssBaseline>
      <ThemeProvider theme={{ [THEME_ID]: materialTheme }}>
        <LandingPage />
      </ThemeProvider>
    </ScopedCssBaseline>
  )
}

export default App
