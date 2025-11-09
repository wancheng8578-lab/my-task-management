import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '@/context';

export default function ProtectedRoute() {
  const { user } = useUser();
  return user?.id ? <Outlet /> : <Navigate to="/login" replace />;
}
