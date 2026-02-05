import React, { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Youtube, Send } from "lucide-react";
import './Contact.css';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'
  const inquiryRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/contact' && location.hash === '#inquiry') {
      // small delay to ensure DOM has rendered
      setTimeout(() => {
        inquiryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  }, [location]);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Replace the following IDs with your EmailJS service/template/public key
    const SERVICE_ID = 'service_9nzmdo5';
    const TEMPLATE_ID = 'template_n5f6yv6';
    const PUBLIC_KEY = '0h69Yqxw_Yst8bgx3';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        formRef.current.reset();
      })
      .catch(() => setStatus('error'));
  };

  return (
    <div className="contact-page">
      <Header/>
      
      {/* Hero Banner Section */}
      <div className="contact-hero">
        <div className="hero-overlay">
          <h1 className="hero-title">Get In Touch</h1>
          <p className="hero-subtitle">We're here to help you with your financial journey</p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="contact-main-content">
        <div className="container">
          {/* Top Contact Cards Section */}
          <div className="contact-cards-section">
            <div className="contact-card">
              <div className="card-icon">
                <MapPin size={28} />
              </div>
              <h3 className="card-title">Our Location</h3>
              <p className="card-text">Pokhara-6, Ratnachowk</p>
              <p className="card-text">Kaski, Nepal</p>
            </div>

            <div className="contact-card">
              <div className="card-icon">
                <Phone size={28} />
              </div>
              <h3 className="card-title">Contact Us</h3>
              <p className="card-text">Phone: +977-61-545445</p>
              <p className="card-text">Mobile: 9744500107</p>
              <p className="card-text">Mail:proformadigitaltech@gmail.com</p>
            </div>

            <div className="contact-card">
              <div className="card-icon">
                <Clock size={28} />
              </div>
              <h3 className="card-title">Working Hours</h3>
              <p className="card-text">Sunday - Friday</p>
              <p className="card-text">9:00 AM - 5:00 PM</p>
              <p className="card-text">Saturday: Closed</p>
            </div>

            <div className="contact-card">
              <div className="card-icon">
                <Facebook size={28} />
              </div>
              <h3 className="card-title">Follow Us</h3>
              <p className="card-text">Stay updated with our latest news</p>
              <div className="social-icons">
                <a href="https://www.facebook.com/profile.php?id=61586117833991" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Facebook size={24} />
                </a>
                <a href="https://www.instagram.com/proformaconsultants/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Instagram size={24} />
                </a>
                <a href="https://www.linkedin.com/company/proforma-insight/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Linkedin size={24} />
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Youtube size={24} />
                </a>
              </div>
            </div>
          </div>
     
{/* Social Media Posts Section */}
<div className="social-posts-section">
  <h2 className="section-title">Latest Updates</h2>
  <div className="social-posts-grid">
    {/* Facebook Post */}
    <div className="social-post-card facebook-post">
      <h3 className="social-post-title">
        <Facebook size={20} />
        Facebook Update
      </h3>
      <div className="post-container">
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0oV85y6LpK3qj9VJG3GQvA4eQd6Nk49tAXGDtcXcwcpNh1vCd17HbYT15tdU5Edkkl%26id%3D61585342955323&show_text=true&width=100%"
          height="500"
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          title="Facebook Post"
          className="social-embed"
        ></iframe>
      </div>
    </div>

    {/* Instagram Post */}
    <div className="social-post-card instagram-post">
      <h3 className="social-post-title">
        <Instagram size={20} />
        Instagram Update
      </h3>
      <div className="post-container">
        <iframe
          src="https://www.instagram.com/p/DT2j84_DfML/embed"
          height="500"
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          title="Instagram Post"
          className="social-embed"
        ></iframe>
      </div>
    </div>
  </div>
</div>

          {/* Two Column Layout: Map + Form */}
          <div className="two-column-section">
            {/* Map Section */}
            <div className="map-section">
              <h2 className="section-title">Find Us on Map</h2>
              <div className="map-container">
                <iframe
                  className="map-iframe"
                  title="Company Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1580.5994759576663!2d83.97558819161135!3d28.204317256884618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39959549cdd845fd%3A0x42037efae8914320!2sGandaki%20Province%20Academy%20of%20Science%20and%20Technology%20(GPAST)%20(Administration%20office)!5e0!3m2!1sen!2snp!4v1769156164126!5m2!1sen!2snp"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Form Section */}
            <div id="inquiry" className="form-section" ref={inquiryRef}>
              <h2 className="section-title">Quick Inquiry</h2>
              <div className="form-container">
                <form ref={formRef} className="contact-form" onSubmit={sendEmail}>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">First Name</label>
                      <input type="text" name="first-name" required placeholder="Enter your first name" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Last Name</label>
                      <input type="text" name="last-name" required placeholder="Enter your last name" />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input type="email" name="email" required placeholder="Enter your email address" />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input type="tel" name="phone" required placeholder="Enter your phone number" />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Subject</label>
                    <input type="text" name="subject" required placeholder="What is this regarding?" />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea 
                      className="form-textarea" 
                      name="message"
                      placeholder="Type your message here..."
                      rows="5"
                    ></textarea>
                  </div>
                  
                  <button className="form-submit-button" type="submit" disabled={status === 'sending'}>
                    <Send size={20} />
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>

                  {status === 'success' && <p className="form-status success">Message sent — we will contact you shortly.</p>}
                  {status === 'error' && <p className="form-status error">Failed to send message. Please try again later.</p>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Street View Section */}
      <div className="street-view-section">
        <div className="container">
          <h2 className="section-title">Office View</h2>
          <div className="street-view-container">
            <iframe
              className="street-view-iframe"
              title="Company Office Street View"
              src="https://www.google.com/maps/embed?pb=!4v1769162834575!6m8!1m7!1sXDn-ScisZJIf5E7PLGojpw!2m2!1d28.20412673297622!2d83.97634522444983!3f165.4111801487917!4f8.589582197356151!5f0.7820865974627469"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
};