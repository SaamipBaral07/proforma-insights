import React from 'react'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { StatsCounter } from './components/StatsCounter.jsx'
import { Award, Users, Clock, Target, CheckCircle, TrendingUp } from 'lucide-react'
import logo1 from './images/team-collab.jpg'
import logo2 from './images/modern-infra.jpg'
import logo3 from './images/client-consult.jpg'
import logo4 from './images/strategic-planning.webp'

export const AboutPage = () => {
  const values = [
    { icon: <Award size={24} />, title: "Excellence", description: "Commitment to delivering exceptional quality in every service" },
    { icon: <Users size={24} />, title: "Collaboration", description: "Building strong partnerships with our clients" },
    { icon: <Clock size={24} />, title: "Reliability", description: "Consistent and dependable service delivery" },
    { icon: <Target size={24} />, title: "Innovation", description: "Embracing new technologies and approaches" }
  ];

  const benefits = [
    "Deep understanding of the Nepali business environment",
    "Experienced team of certified professionals",
    "Personalized solutions tailored to client needs",
    "Comprehensive service offerings under one roof",
    "Proven track record of client success",
    "Continuous support and guidance"
  ];

  return (
    <div className="about-page">
      <Header />
      <StatsCounter />
      
      {/* Main Content */}
      <div className="about-container">
        {/* Hero Section */}
        <div className="about-hero-section">
          <div className="about-hero-content">
            <h1 className="about-hero-title">Leading Business Consultant in Nepal</h1>
            <p className="about-hero-subtitle">
              Proforma Insights is Nepal's premier business & IT consultancy, offering expert tax planning, 
              accounting, compliance, and strategic consulting services with precision and dedication.
            </p>
          </div>
        </div>

        {/* History Section */}
        <div className="about-history-section">
          <div className="about-history-content">
            <h2 className="about-section-title">Our Journey</h2>
            <p className="about-history-text">
              Founded in 2010, Proforma Insights has evolved from a small consultancy to a trusted leader in 
              Nepal's business landscape. Over the years, we have continuously expanded our expertise and 
              service portfolio to meet the evolving needs of our clients, helping them navigate complex 
              business challenges and achieve sustainable growth.
            </p>
            <div className="about-history-highlights">
              <div className="about-highlight">
                <TrendingUp size={32} />
                <span>Over a decade of excellence</span>
              </div>
              <div className="about-highlight">
                <Users size={32} />
                <span>500+ satisfied clients</span>
              </div>
              <div className="about-highlight">
                <Award size={32} />
                <span>Industry recognition</span>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="about-gallery-section">
          <h2 className="about-section-title">Our Work Environment</h2>
          <div className="about-gallery-grid">
            <div className="about-gallery-item">
              <img src={logo1} alt="Professional Team Collaboration" />
              <div className="about-gallery-overlay">
                <span>Team Collaboration</span>
              </div>
            </div>
            <div className="about-gallery-item">
              <img src={logo2} alt="Modern Office Infrastructure" />
              <div className="about-gallery-overlay">
                <span>Modern Infrastructure</span>
              </div>
            </div>
            <div className="about-gallery-item">
              <img src={logo3} alt="Client Consultation" />
              <div className="about-gallery-overlay">
                <span>Client Consultation</span>
              </div>
            </div>
            <div className="about-gallery-item">
              <img src={logo4} alt="Strategic Planning" />
              <div className="about-gallery-overlay">
                <span>Strategic Planning</span>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="about-values-section">
          <h2 className="about-section-title">Our Core Values</h2>
          <div className="about-values-grid">
            {values.map((value, index) => (
              <div key={index} className="about-value-card">
                <div className="about-value-icon">{value.icon}</div>
                <h3 className="about-value-title">{value.title}</h3>
                <p className="about-value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="about-why-choose-section">
          <div className="about-why-choose-content">
            <h2 className="about-section-title">Why Choose Proforma Insights?</h2>
            <div className="about-benefits-grid">
              <div className="about-benefits-list">
                <h3 className="about-benefits-title">Key Advantages</h3>
                <ul className="about-benefits-items">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="about-benefit-item">
                      <CheckCircle size={20} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="about-benefits-summary">
                <h3 className="about-summary-title">Your Trusted Partner</h3>
                <p className="about-summary-text">
                  We combine deep industry knowledge with innovative solutions to deliver exceptional value 
                  to our clients. Our client-centric approach ensures that every solution is tailored to 
                  address your unique business challenges and opportunities.
                </p>
                <p className="about-summary-text">
                  As Nepal's preferred choice for business consultancy, we build lasting partnerships 
                  that drive success and foster sustainable growth for businesses and individuals alike.
                </p>
                <div className="about-summary-points">
                  <div className="about-point">
                    <div className="about-point-number">01</div>
                    <div className="about-point-content">
                      <h4>Expert Guidance</h4>
                      <p>Professional advice from experienced consultants</p>
                    </div>
                  </div>
                  <div className="about-point">
                    <div className="about-point-number">02</div>
                    <div className="about-point-content">
                      <h4>Innovative Solutions</h4>
                      <p>Cutting-edge approaches to business challenges</p>
                    </div>
                  </div>
                  <div className="about-point">
                    <div className="about-point-number">03</div>
                    <div className="about-point-content">
                      <h4>Dedicated Support</h4>
                      <p>Continuous assistance for your business success</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="about-cta-section">
          <div className="about-cta-content">
            <h2 className="about-cta-title">Ready to Transform Your Business?</h2>
            <p className="about-cta-subtitle">
              Partner with Nepal's leading business consultancy to unlock your organization's full potential 
              and achieve sustainable success.
            </p>
            <div className="about-cta-buttons">
              <a href="/contact" className="about-cta-button primary">Get Consultation</a>
              <a href="/services" className="about-cta-button secondary">Our Services</a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}