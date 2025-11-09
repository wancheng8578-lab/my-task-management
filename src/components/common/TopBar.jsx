import { AppBar, Toolbar, Stack } from '@mui/material';
import { useUser, useTasks } from '@/context';
import { useNavigate } from 'react-router-dom';
import { Text, Image, Button } from '@/components';
import { useTheme } from '@mui/material/styles';

const Component = () => {
  const navigate = useNavigate();

  const theme = useTheme();

  const { user, removeAllUser } = useUser();

  const { deleteAllTask } = useTasks();

  const logout = () => {
    removeAllUser(`user`);
    deleteAllTask(`tasks`);
    navigate(`/login`, { replace: true });
  };

  if (!user) {
    return;
  }

  return (
    <AppBar position={`static`} color={`transparent`} sx={{ px: { xs: 2, sm: 10 } }} elevation={0}>
      <Toolbar disableGutters sx={{ display: `flex`, justifyContent: `space-between` }}>
        <Stack flexDirection={`row`} gap={1}>
          <Image width={40} height={40} rounded fit={`cover`} />
          <Text variant={`h6`}>{user?.name}</Text>
        </Stack>
        <Button variant={`text`} sx={{ color: theme.palette.text.secondary }} onClick={logout}>
          {`Logout`}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export { Component };
