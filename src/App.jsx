import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Spaces from "./pages/Spaces";
import Reservation from "./pages/Reservation";
import Contact from "./pages/Contact";
import CMC from "./pages/CMC";
import Login from "./pages/Admin/Login";
import SpacesManagement from "./pages/Admin/SpacesManagement";
import ReservationsManagement from "./pages/Admin/ReservationsManagement";

import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/admin/login" />;
    }
    return children;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explorer" element={<Spaces />} />
        <Route path="/reserver" element={<Reservation />} />
        <Route path="/reserver/:id" element={<Reservation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cmc" element={<CMC />} />
        <Route path="/admin/login" element={<Login onLogin={handleLogin} />} />
        <Route
          path="/admin/spaces"
          element={
            <ProtectedRoute>
              <SpacesManagement />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/reservations"
          element={
            <ProtectedRoute>
              <ReservationsManagement />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
