import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation
} from "react-router-dom";
import './index.css'

import { Home, About, Projects, Contact } from './routes';
import { Header, Navbar, Transition } from './Components'

import { AnimatePresence, motion } from 'framer-motion'

const Layout = () => {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence mode='wait'>
        <motion.div key={location.pathname} style={{ height: '100%' }}>
          <Transition />
        </motion.div>
        <div className='app'>
          <Header />
          <Navbar />
          <Outlet />
        </div>
      </AnimatePresence>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);