import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
import proformaLogo from '../images/proformaLogo.jpeg';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="footer-compact">
      <div className="footer-top">
        {/* Brand Column */}
        <div className="footer-logo-section">
          <img src={proformaLogo} alt="Proforma Insights Logo" className="footer-logo" />
          <h3 className="footer-brand-title">Proforma Insights</h3>
          <p className="footer-desc">
            Offering professional services with genuine expertise for excellent customer satisfaction.
          </p>
          <div className="footer-socials">
            <a href="https://www.facebook.com/profile.php?id=61586117833991" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Facebook size={18} />
            </a>
            <a href="https://www.instagram.com/proformainsights/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Instagram size={18} />
            </a>
            <a href="https://www.linkedin.com/company/proforma-insight/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Links Column */}
        <div className="footer-column" id="quick-links-column">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/insights">Insights</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-column" id="our-business-column">
          <h4 className="footer-heading">Our Business</h4>
          <ul className="footer-list">
            <li><a href="https://www.facebook.com/profile.php?id=61585342955323" target="_blank" rel="noopener noreferrer">Proforma Consultancy</a></li>
            <li><a href="https://www.facebook.com/ABCTutoringService01/" target="_blank" rel="noopener noreferrer">ABC Tuition Centre</a></li>
            <li><a href="https://www.facebook.com/profile.php?id=61586117833991" target="_blank" rel="noopener noreferrer">Proforma Insights</a></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="footer-contact">
          <h4 className="footer-heading">Contact Us</h4>
          <div className="contact-item">
            <MapPin size={18} />
            <span>Ratnachowk, Pokhara</span>
          </div>
          <div className="contact-item">
            <Phone size={18} />
            <a href="tel:+977061545445">+061-545445</a>
          </div>

        <div className="contact-item">
            <Phone size={18} />
            <a href="tel:+9779744500107">+977-9744500107</a>
          </div>

          <div className="contact-item">
            <Mail size={18} />
            <a href="mailto:proformadigitaltech@gmail.com">proformadigitaltech@gmail.com</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <p>&copy; {new Date().getFullYear()} Proforma Group. All rights reserved.</p>
      </div>
    </footer>
  );
}