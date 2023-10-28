import { createBrowserRouter, Outlet } from 'react-router-dom';
import { Navbar } from '../../layout';
import { Home } from '../../pages';


const AppLayout = () => {
  return (
    <div className="h-screen w-screen 2xl:container mx-auto">
      <Navbar />
      <Outlet />
    </div>
  );
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);
