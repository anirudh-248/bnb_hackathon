import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import AddItem from './pages/Add_item';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Wardrobe from './pages/Wardrobe';
import WardrobeItems from './pages/Wardrobe_items';

function App() {
  const isAuthenticated = true; // Replace with actual authentication logic
  const user = { firstName: 'John' }; // Replace with actual user data

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index isAuthenticated={isAuthenticated} user={user} />} />
        <Route path="/add_item" element={<AddItem />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/wardrobe" element={<Wardrobe />} />
        <Route path="/wardrobe_item/:id" element={<WardrobeItems />} />
      </Routes>
    </Router>
  );
}

export default App;