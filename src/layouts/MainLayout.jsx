import { TopBar } from '../components';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

export default function MainLayout() {
  return (
    <Box sx={{ display: `flex`, flexDirection: `column`, height: `100vh` }}>
      <TopBar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          overflowY: `auto`,
          px: { xs: 0, sm: 10 },
          pb: 2,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
