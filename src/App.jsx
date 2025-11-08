import { useRoutes, Navigate } from 'react-router-dom';
import routes from '~react-pages';
import ProtectedRoute from './ProtectedRoute';
import MainLayout from './layouts/MainLayout';

export default function App() {
  const loginRoute = routes.find((r) => {
    return r.path?.toLowerCase() === `login`;
  });

  return useRoutes([
    {
      path: `/`,
      element: (
        <ProtectedRoute>
          <MainLayout />
        </ProtectedRoute>
      ),
      children: [{ index: true, element: <Navigate to="/dashboard" replace /> }],
    },

    { path: `/login`, element: loginRoute?.children[0].element },

    {
      element: (
        <ProtectedRoute>
          <MainLayout />
        </ProtectedRoute>
      ),
      children: routes.filter((r) => r.path?.toLowerCase() !== `login`),
    },
  ]);
}
