import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './pages/Footer'; // Correct import
import Home from './pages/Home';
import Prices from './pages/Prices';
import BookRoom from './pages/BookRoom';
import Gallery from './pages/Gallery';
import Login from './pages/Login';
import FoodMenu from './pages/FoodMenu';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Fillform from './pages/Fillform';
import TermsConditions from './pages/TermsConditions';
import './Styles/global.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: `'K2D', sans-serif`, // Apply K2D font globally to MUI components
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prices" element={<Prices />} />
            <Route path="/book-room" element={<BookRoom />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Fillform" element={<Fillform/>} />
            <Route path="/foodMenu" element={<FoodMenu />} />
            <Route path="/AboutUs"element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/TermsConditions" element={<TermsConditions />} />
          </Routes>
        </div>
        <Footer /> {/* ✅ Now the footer appears on all pages */}
      </Router>
    </ThemeProvider>
  );
}

export default App;
