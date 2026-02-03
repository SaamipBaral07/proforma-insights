import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, ChevronDown, Clock, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import logo from '../images/proforma-logo-1.png';

export const Header = () => {
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleServicesHover = (isHovering) => {
    setServicesDropdown(isHovering);
  };

  const handleServiceSelect = () => {
    setServicesDropdown(false);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const services = [
    { name: "Accounting", path: "/accounting" },
    { name: "Tax Services", path: "/tax" },
    { name: "IT Solutions", path: "/it" },
    { name: "Digital Services", path: "/digital" },
  ];

  return (
    <header className="header">
      {/* Top Info Section */}
      <div className="header-top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="top-bar-info">
              <div className="info-item">
                <MapPin size={14} />
                <span>Ratnachowk, Pokhara, Nepal</span>
              </div>
              <div className="info-item">
                <Clock size={14} />
                <span>Sun-Fri: 9:00 AM - 5:00 PM</span>
              </div>
            </div>
            
            <div className="top-bar-contact">
              <a href="mailto:contact@proforma.com" className="contact-link">
                <Mail size={14} />
                <span>contact@proforma.com</span>
              </a>
              <a href="tel:+977061545445" className="contact-link">
                <Phone size={14} />
                <span>061-545445</span>
              </a>
            </div>

            <div className="top-bar-social">
              <a href="https://www.facebook.com/profile.php?id=61586117833991" target="_blank" rel="noopener noreferrer" className="social-link">
                <Facebook size={14} />
              </a>
              <a href="https://www.instagram.com/proformainsights/" target="_blank" rel="noopener noreferrer" className="social-link">
                <Instagram size={14} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <Linkedin size={14} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <Youtube size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="header-main">
        <div className="container">
          <div className="nav-container">
            {/* Logo */}
            <div className="logo-container">
              <Link to="/" className="logo-link">
                <img src={logo} alt="Proforma Insights" className="logo-image" />
                <div className="logo-text">
                  <span className="logo-main">Proforma</span>
                  <span className="logo-sub">Insights</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="desktop-nav">
              <Link 
                to="/" 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
              >
                About Us
              </Link>
              
              <div 
                className="dropdown-container"
                onMouseEnter={() => handleServicesHover(true)}
                onMouseLeave={() => handleServicesHover(false)}
              >
                <Link 
                  to="/services"
                  className={`dropdown-btn ${servicesDropdown ? 'active' : ''} ${location.pathname === '/services' ? 'active' : ''}`}
                >
                  Our Services
                  <ChevronDown size={16} className={`dropdown-icon ${servicesDropdown ? 'rotated' : ''}`} />
                </Link>
                
                {servicesDropdown && (
                  <div className="dropdown-content">
                    {services.map((service) => (
                      <Link 
                        key={service.path}
                        to={service.path} 
                        className="dropdown-item"
                        onClick={handleServiceSelect}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link 
                to="/team" 
                className={`nav-link ${location.pathname === '/team' ? 'active' : ''}`}
              >
                Our Team
              </Link>
              
              <Link to="/insights" className={`nav-link ${location.pathname === '/insights' ? 'active' : ''}`}>
                Insights
              </Link>
              
              <Link 
                to="/contact" 
                className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
              >
                Contact
              </Link>
            </nav>

            {/* CTA Button */}
            <Link to="/contact" className="cta-button">
              <Phone size={16} />
              Get Consultation
            </Link>

            {/* Mobile Menu Button */}
            <button 
              className="mobile-menu-btn"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <div className="menu-icon">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-content">
            <button 
              className="mobile-close-btn"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <span></span>
              <span></span>
            </button>

            <Link 
              to="/" 
              className={`mobile-nav-link ${location.pathname === '/' ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`mobile-nav-link ${location.pathname === '/about' ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            
            <div className="mobile-dropdown">
              <button 
                className="mobile-dropdown-btn"
                onClick={() => setServicesDropdown(!servicesDropdown)}
              >
                Our Services
                <ChevronDown size={16} className={`dropdown-icon ${servicesDropdown ? 'rotated' : ''}`} />
              </button>
              
              <div className={`mobile-dropdown-content ${servicesDropdown ? 'open' : ''}`}>
                <Link 
                  to="/services"
                  className="mobile-dropdown-item"
                  onClick={handleServiceSelect}
                >
                  All Services
                </Link>
                {services.map((service) => (
                  <Link 
                    key={service.path}
                    to={service.path} 
                    className="mobile-dropdown-item"
                    onClick={handleServiceSelect}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link 
              to="/team" 
              className={`mobile-nav-link ${location.pathname === '/team' ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Team
            </Link>
            

            <Link to="/insights" className={`mobile-nav-link ${location.pathname === '/insights' ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Insights
            </Link>


            <Link 
              to="/contact" 
              className={`mobile-nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>

            <div className="mobile-contact-info">
              <a href="tel:+977061545445" className="mobile-contact-link">
                <Phone size={18} />
                <span>061-545445</span>
              </a>
              <a href="mailto:contact@proforma.com" className="mobile-contact-link">
                <Mail size={18} />
                <span>contact@proforma.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}