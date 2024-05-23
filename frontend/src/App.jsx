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
import FoodPage from './services/FoodPage';
import PhotoDetailsPage from './services/PhotoDetailsPage';
import CostumeDetailsPage from './services/CostumeDetailsPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/costume" element={<CostumePage />} />
        <Route path="/costumes/:id" element={<CostumeDetailsPage />} /> {/* Fixed the route */}
        <Route path="/photographer" element={<PhotographerPage />} /> {/* Update the route path */}
        <Route path="/photographers/:id" element={<PhotoDetailsPage />} /> {/* New route for PhotoDetailsPage */}
        <Route path="/makeup" element={<MakeupPage />} />
        <Route path="/food" element={<FoodPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
