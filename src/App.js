import React, { useEffect } from "react";
import {
  Routes,
  Route,
  useLocation,
  HashRouter as Router,
} from "react-router-dom";
import "./App.css";
import { useDispatch } from "react-redux";
import { setPage } from "./store/slice/pageSlice";
import ScrollToTop from "./components/ScrollToTop/SrollToTop";
import Layout from "./components/LayoutPage/Layout/Layout";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import ContactUs from "./pages/ContactUs/ContactUs";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <MainRoutes />
    </Router>
  );
}

function MainRoutes() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    // Update global state when route changes
    dispatch(setPage(location.pathname));
  }, [location, dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Index route for Home */}
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="contactus" element={<ContactUs />} />
        {/* Catch-all route for undefined paths */}
        <Route
          path="*"
          element={
            <div>
              <h1>404 - Not Found</h1>
            </div>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
