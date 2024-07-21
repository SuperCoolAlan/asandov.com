import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { EspressoPage } from './pages/Espresso.page';
import { WorkInfoPage } from './pages/Work.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/coffee',
    element: <EspressoPage />,
  },
  {
    path: '/work',
    element: <WorkInfoPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
