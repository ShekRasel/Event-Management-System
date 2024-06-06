import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminSignIn from './pages/AdminSignIn';
import AdminSignUp from './pages/AdminSignUp';
import AdminDashboard from './pages/AdminDashboard';
import Navbar from './components/Navbar'; // Import the Navbar component

function App() {
  // Check if the admin is authenticated
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(true); // Set to true for testing

  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Include the Navbar component here */}
        <Routes>
          <Route path="/admin/signin" element={<AdminSignIn />} />
          <Route path="/admin/signup" element={<AdminSignUp />} />
          {isAdminAuthenticated && <Route path="/admin/dashboard" element={<AdminDashboard />} />}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
