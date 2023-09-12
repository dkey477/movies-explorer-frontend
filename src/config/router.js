import { createBrowserRouter } from 'react-router-dom';
import Main from '../components/Main/Main';
import Page404 from '../components/Page404/Page404';
import Register from '../components/Register/Register';
import Login from '../components/Login/Login';
import Profile from '../components/Profile/Profile';
import Movies from '../components/Movies/Movies';
import SavedMovies from '../components/SavedMovies/SavedMovies';
import { AppLayout } from '../components/AppLayout/AppLayout';
import { ProtectedRoute } from '../components/ProtectedRoute/ProtectedRoute';

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: '*',
        element: <Page404 />,
      },
      {
        path: '/signup',
        element: <Register />,
      },
      {
        path: '/signin',
        element: <Login />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: '/profile',
            element: <Profile />,
          },
          {
            path: '/movies',
            element: <Movies />,
          },
          {
            path: '/saved-movies',
            element: <SavedMovies />,
          }
        ]
      },
    ]
  },
]);
