import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { EspressoPage } from './pages/Espresso.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/coffee',
    element: <EspressoPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
