import ReactDOM from 'react-dom/client';
import App from './App';
import { UserProvider, TaskProvider } from '@/context';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '@/route/index.jsx';

const theme = createTheme({
  palette: {
    mode: `light`,
    background: { default: `#F7F9FC` },
    primary: { main: `#4F7FFF` },
    secondary: { main: `#E6E9EF` },
    text: {
      primary: `#6B7A8C`,
      secondary: `#6B7280`,
    },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiPaper: { styleOverrides: { root: { boxShadow: `0 1px 6px rgba(0,0,0,0.06)` } } },
    MuiButton: { defaultProps: { disableElevation: true } },
  },

  typography: {
    fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
    button: {
      fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
      letterSpacing: `0.5px`,
    },
  },
});

ReactDOM.createRoot(document.getElementById(`root`)).render(
  <BrowserRouter basename="/my-task-management">
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UserProvider>
        <TaskProvider>
          <AppRoutes />
        </TaskProvider>
      </UserProvider>
    </ThemeProvider>
  </BrowserRouter>
);
