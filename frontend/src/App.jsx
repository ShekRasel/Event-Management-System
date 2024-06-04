import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Orders from './pages/Orders';
import Contact from './pages/Contact';
import AddProduct from './pages/AddProduct';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Footer from './components/Footer';
import CostumePage from './services/CostumePage';
import PhotographerPage from './services/PhotographerPage';
import MakeupPage from './services/MakeupPage';
import VenuePage from './services/VenuePage';
import BirthdayPage from './services/BithdayPage';
import OfficePage from './services/OfficePage';
import PhotoDetailsPage from './services/PhotoDetailsPage';
import CostumeDetailsPage from './services/CostumeDetailsPage';
import MakeupDetailsPage from './services/MakeupDetailsPage';
import VenueDetailsPage from './services/VenueDetailsPage';
import ProtectedRoute from './components/ProtectedRoute';
import BirthdayDetailsPage from './services/BithdayDetailsPage';
import OfficeDetailsPage from './services/OfficeDetailsPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/orders" element={
          <ProtectedRoute>
            <Orders />
          </ProtectedRoute>
        } />
        <Route path="/contact" element={<Contact />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/costume" element={<CostumePage />} />
        <Route path="/costumes/:id" element={<CostumeDetailsPage />} />
        <Route path="/photographer" element={<PhotographerPage />} />
        <Route path="/photographers/:id" element={<PhotoDetailsPage />} />
        <Route path="/makeup" element={<MakeupPage />} />
        <Route path="/makeups/:id" element={<MakeupDetailsPage />} />
        <Route path="/venue" element={<VenuePage />} />
        <Route path="/venues/:id" element={<VenueDetailsPage />} />
        <Route path="/birthday" element={<BirthdayPage/>} />
        <Route path="/birthdays/:id" element={<BirthdayDetailsPage />} />
        <Route path="/office" element={<OfficePage/>} />
        <Route path="/offices/:id" element={<OfficeDetailsPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
