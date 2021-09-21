import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from 'src/shared/layouts/dashboard/dashboard.layout';
import UserContainer from 'src/features/pages/user/user.container';
import LogoOnlyLayout from 'src/shared/layouts/logo-only/logo-only.layout';
import LoginContainer from 'src/features/pages/login/login.container';
import CreatePostContainer from 'src/features/pages/create-post/create-post.container';

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/user" replace /> },
        { path: 'user', element: <UserContainer /> },
        { path: 'create-post', element: <CreatePostContainer /> },
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'login', element: <LoginContainer /> },
        // { path: 'register', element: <Register /> },
        // { path: '404', element: <NotFound /> },
        // { path: '/', element: <Navigate to="/dashboard" /> },
        // { path: '*', element: <Navigate to="/404" /> }
      ]
    },

    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
