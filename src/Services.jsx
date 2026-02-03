import React from 'react';
import './Services.css';
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { ArrowRight, Calculator, FileText, Cpu, TrendingUp, Sparkles, CheckCircle, Users, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Services = () => {
  const services = [
    {
      id: 1,
      icon: <Calculator size={32} />,
      title: "Accounting Services",
      description: "Professional accounting services including bookkeeping, financial reporting, budgeting, and financial analysis tailored to your business needs.",
      features: [
        "Bookkeeping & Financial Reporting",
        "Budgeting & Forecasting",
        "Financial Statement Analysis",
        "Payroll Processing",
        "Compliance Management"
      ],
      link: "/accounting",
      color: "#0066cc"
    },
    {
      id: 2,
      icon: <FileText size={32} />,
      title: "Tax Consulting",
      description: "Expert tax planning, compliance, and optimization services to minimize liabilities and maximize returns for individuals and businesses.",
      features: [
        "Tax Planning & Strategy",
        "Tax Return Preparation",
        "Compliance Management",
        "Tax Audit Support",
        "International Tax Services"
      ],
      link: "/tax",
      color: "#0052a3"
    },
    {
      id: 3,
      icon: <Cpu size={32} />,
      title: "IT Solutions",
      description: "Comprehensive IT services including software development, system integration, cloud solutions, and IT infrastructure management.",
      features: [
        "Software Development",
        "Cloud Solutions & Migration",
        "IT Infrastructure Management",
        "Cybersecurity Services",
        "Digital Transformation"
      ],
      link: "/it",
      color: "#4da6ff"
    },
    {
      id: 4,
      icon: <TrendingUp size={32} />,
      title: "Digital Marketing",
      description: "Strategic digital marketing services including SEO, social media marketing, content strategy, and online brand development.",
      features: [
        "SEO & SEM Strategy",
        "Social Media Marketing",
        "Content Marketing",
        "Brand Development",
        "Marketing Analytics"
      ],
      link: "/digital",
      color: "#00a8ff"
    }
  ];

  const benefits = [
    { icon: <Users size={24} />, text: "Expert Team of Professionals" },
    { icon: <Clock size={24} />, text: "Timely Delivery & Support" },
    { icon: <CheckCircle size={24} />, text: "Quality Assurance Guaranteed" },
    { icon: <Award size={24} />, text: "Industry Best Practices" }
  ];

  return (
    <div className="services-page">
      <Header />
      
      {/* Hero Section with Overlay */}
      <div className="services-hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">
          
              Our Services
            </h1>
            <p className="hero-subtitle">
              Comprehensive business solutions designed to drive growth, efficiency, and success for your organization
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="services-benefits">
        <div className="container">
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <p className="benefit-text">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Services Section */}
      <div className="services-main">
        <div className="container">
          <div className="services-header">
            <h2 className="services-section-title">Our Expertise</h2>
            <p className="services-section-subtitle">
              We provide end-to-end business solutions that combine strategic insight with practical implementation
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-card-header">
                  <div className="service-icon" style={{ color: service.color }}>
                    {service.icon}
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                </div>
                
                <p className="service-description">{service.description}</p>
                
                <div className="service-features">
                  <h4 className="features-title">Key Features</h4>
                  <ul className="features-list">
                    {service.features.map((feature, index) => (
                      <li key={index} className="feature-item">
                        <CheckCircle size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link to={service.link} className="service-link">
                  Explore Service
                  <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="services-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-main-title">Ready to Transform Your Business?</h2>
            <p className="cta-main-subtitle">
              Let's discuss how our comprehensive services can help you achieve your business objectives and drive sustainable growth.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-button primary">
                Get Free Consultation
              </Link>
              <a href="tel:+977061545445" className="cta-button secondary">
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}