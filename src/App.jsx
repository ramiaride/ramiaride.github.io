import './App.css';
import '@fontsource/montserrat/800.css';

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Topbar from './components/TopBar';
import ScrollToTop from './components/ScrollToTop';

import MainPage from './pages/mainpage';
import ProductDesign from './pages/productdesign';
import InteriorDesign from './pages/interiordesign';
import GraphicDesign from './pages/graphicdesign';

// AnimatedRoutes component using Framer Motion
function AnimatedRoutes() {
  const location = useLocation();

  return (
    
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              key="mainpage"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              style={{ position: 'absolute', width: '100%' }}
            >
              <MainPage />
            </motion.div>
          }
        />
        <Route
          path="/ProductDesign"
          element={
            <motion.div
              key="productdesign"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              style={{ position: 'absolute', width: '100%' }}
            >
              <ProductDesign />
            </motion.div>
          }
        />
        <Route
          path="/InteriorDesign"
          element={
            <motion.div
              key="interiordesign"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              style={{ position: 'absolute', width: '100%' }}
            >
              <InteriorDesign />
            </motion.div>
          }
        />

           <Route
          path="/GraphicDesign"
          element={
            <motion.div
              key="GraphicDesign"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              style={{ position: 'absolute', width: '100%' }}
            >
              <GraphicDesign />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
    
  );

}

function App() {
  return (
    <Router>
      <ScrollToTop />
   <Topbar />
<AnimatedRoutes />

    </Router>
  );
  



}



export default App;