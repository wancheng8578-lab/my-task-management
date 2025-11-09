import ReactDOM from 'react-dom/client';
import App from './App';
import { UserProvider, TaskProvider } from '@/context';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

const theme = createTheme({
  palette: {
    mode: `light`,
    background: { default: `#F7F9FC` },
    primary: { main: `#5A8DEE` },
    secondary: { main: `#E6E9EF` },
    text: {
      primary: `#374151`,
      secondary: `#6B7280`,
    },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiPaper: { styleOverrides: { root: { boxShadow: `0 1px 6px rgba(0,0,0,0.06)` } } },
    MuiButton: { defaultProps: { disableElevation: true } },
  },
  typography: { fontFamily: `Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial` },
});

ReactDOM.createRoot(document.getElementById(`root`)).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UserProvider>
        <TaskProvider>
          <App />
        </TaskProvider>
      </UserProvider>
    </ThemeProvider>
  </BrowserRouter>
);
