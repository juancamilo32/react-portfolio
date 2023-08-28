import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  BrowserRouter as Router,
  Outlet,
  useLocation,
  Routes,
  Route
} from "react-router-dom";
import './index.css'

import { Home, About, Projects, Contact } from './routes';
import { Header, Navbar, Transition } from './Components'

import { AnimatePresence, motion } from 'framer-motion'

const App = () => {
  const location = useLocation();
  return (
    <div className='app'>
      <Header />
      <Navbar />
      <AnimatePresence mode='wait'>
        <motion.div key={location.pathname} style={{ height: '100%' }}>
          <Routes location={location} key={location.pathname}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <Transition />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/*' element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);