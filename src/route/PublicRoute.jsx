import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '@/context';

export default function PublicRoute() {
  const { user } = useUser();
  return user?.id ? <Navigate to="/dashboard" replace /> : <Outlet />;
}
