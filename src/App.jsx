import { useRoutes, Navigate } from 'react-router-dom';
import routes from '~react-pages';
import ProtectedRoute from './ProtectedRoute';
import MainLayout from './layouts/MainLayout';
import Login from './pages/Login';

export default function App() {
  return useRoutes([
    { path: `/login`, element: <Login /> },
    {
      element: <ProtectedRoute />,
      children: [
        {
          element: <MainLayout />,
          children: [
            { path: `/`, element: <Navigate to="/dashboard" replace /> },
            ...routes.filter((r) => r.path?.toLowerCase() !== `login`),
          ],
        },
      ],
    },
  ]);
}
