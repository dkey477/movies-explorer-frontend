import { RouterProvider } from 'react-router-dom';
import { router } from '../../config/router';

export const AppRouterProvider = ({ children }) => {
  return (
    <RouterProvider router={router}>
      {children}
    </RouterProvider>
  );
};
