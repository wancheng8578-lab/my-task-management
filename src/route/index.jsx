import { useRoutes, Navigate } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import ProtectedRoute from './ProtectedRoute';
import MainLayout from '@/layouts/MainLayout';
import Login from '@/pages/Login';
import { routes } from './routes';

export default function AppRoutes() {
  return useRoutes([
    {
      element: <PublicRoute />,
      children: [
        {
          path: `/login`,
          element: <Login />,
        },
      ],
    },
    {
      element: <ProtectedRoute />,
      children: [
        {
          element: <MainLayout />,
          children: [{ path: `/`, element: <Navigate to="/dashboard" replace /> }, ...routes],
        },
      ],
    },
  ]);
}
