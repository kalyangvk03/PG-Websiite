import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../components/logo.png';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Prices', path: '/prices' },
    { text: 'Fill Form', path: '/Fillform' },
    { text: 'Book Room', path: '/book-room' },
    { text: 'Gallery', path: '/gallery' },
    { text: 'Food Menu', path: '/FoodMenu' },
    { text: 'About Us', path: '/AboutUs' },
    { text: 'Contact Us', path: '/contact-us' },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <AppBar position="fixed" style={{ backgroundColor: '#101337', padding: '8px 20px', boxShadow: 'none' }}>
        <Toolbar>
          {/* Clickable Logo (Navigates to Home) */}
          <Link to="/" style={{ textDecoration: 'none' }}>
            <img src={logo} alt="PG Logo" style={{ height: 80, marginRight: 15, cursor: 'pointer' }} />
          </Link>

          <Typography variant="h6" style={{ flexGrow: 1, fontWeight: '700', fontFamily: 'K2D, sans-serif' }}>
          </Typography>

          {/* Desktop Menu */}
          <div className="nav-links" style={{ display: 'flex', gap: '15px' }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                component={Link}
                to={item.path}
                style={{
                  color: 'white',
                  fontWeight: '600',
                  fontFamily: 'K2D, sans-serif',
                  textTransform: 'none',
                }}
              >
                {item.text}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <IconButton color="inherit" edge="end" onClick={handleDrawerToggle} sx={{ display: { md: 'none' } }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <List style={{ width: 250 }}>
          {menuItems.map((item) => (
            <ListItem button key={item.text} component={Link} to={item.path} onClick={handleDrawerToggle}>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
