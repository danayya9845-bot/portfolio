import { Route, useLocation, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import MainLayout from "./layout/MainLayout";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Process from "./pages/Process";
import Contact from "./pages/Contact";

export default function App() {
  const location = useLocation();

  return (   
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/process" element={<Process />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}
