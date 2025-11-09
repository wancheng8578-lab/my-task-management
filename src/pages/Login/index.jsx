import { useState } from 'react';
import { Container, Stack } from '@mui/material';
import { Card } from '@/components';
import { useUser } from '@/context';
import { useNavigate } from 'react-router-dom';
import { TextBox, Text, Button } from '@/components';

export default function Login() {
  const navigate = useNavigate();

  const { addUser } = useUser();

  const [user, setUser] = useState({ id: ``, name: `` });

  const login = (e) => {
    e.preventDefault();
    addUser(user);
    navigate(`/dashboard`);
  };

  return (
    <Container
      maxWidth={false}
      sx={{ minHeight: `100vh`, display: `flex`, alignItems: `center`, maxWidth: 350 }}
    >
      <Card component={`form`} onSubmit={login} sx={{ p: 2, width: `100%` }}>
        <Stack spacing={2}>
          <Text variant={`h5`}>{`Login`}</Text>
          <TextBox
            label={`Id`}
            value={user.id}
            onChange={(value) =>
              setUser((prev) => {
                return {
                  ...prev,
                  id: value,
                };
              })
            }
            required
          />
          <TextBox
            label={`Name`}
            value={user.name}
            onChange={(value) =>
              setUser((prev) => {
                return {
                  ...prev,
                  name: value,
                };
              })
            }
            required
          />
          <Button type="submit">{`Login`}</Button>
        </Stack>
      </Card>
    </Container>
  );
}
