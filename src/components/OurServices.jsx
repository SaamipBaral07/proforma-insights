import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart3, Calculator, AlertCircle, Users } from 'lucide-react';

export const OurServices = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(0);
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      id: 1,
      title: 'Accounting',
      icon: Calculator,
      description: 'Professional accounting services tailored to your business needs',
      path: '/accounting',
      color: '#007bff'
    },
    {
      id: 2,
      title: 'Tax Services',
      icon: BarChart3,
      description: 'Expert tax planning and compliance solutions',
      path: '/tax-service',
      color: '#0056b3'
    },
    {
      id: 3,
      title: 'IT Services',
      icon: AlertCircle,
      description: 'Comprehensive IT solutions for modern businesses',
      path: '/it-service',
      color: '#003d82'
    },
    {
      id: 4,
      title: 'Digital Solutions',
      icon: Users,
      description: 'Innovative digital transformation strategies',
      path: '/digital-service',
      color: '#002856'
    }
  ];

  const handleServiceSelect = (index) => {
    setSelectedService(index);
  };

  return (
    <div className={`our-services-section ${isInView ? 'animate-in' : ''}`} ref={sectionRef}>
      <div className="our-services-container">
        <div className="our-services-header">
          <h2 className="our-services-title">Our Services</h2>
          <div className="our-services-underline"></div>
        </div>
        
        <p className="our-services-subtitle">
          Our strength is ability to understand the needs of our clients and their business to create customized solutions and meet those clients' needs.
        </p>

        {/* Icons Grid */}
        <div className="our-services-icons-grid">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.id}
                className={`service-icon-container ${index === selectedService ? 'active' : ''}`}
                onClick={() => handleServiceSelect(index)}
              >
                <div 
                  className="service-icon-wrapper"
                  style={{ borderColor: service.color }}
                >
                  <IconComponent size={50} color={service.color} strokeWidth={1.5} />
                </div>
                <p className="service-icon-label">{service.title}</p>
              </div>
            );
          })}
        </div>

        {/* Description Section */}
        <div className="service-description-section">
          <div className="service-description-divider"></div>
          
          <div className="service-description-container">
            <h3 className="service-selected-title">
              {services[selectedService].title}
            </h3>
            
            <p className="service-selected-description">
              {services[selectedService].description}
            </p>
            
            <button 
              className="service-detail-button"
              onClick={() => navigate(services[selectedService].path)}
            >
              Learn more
              <span className="arrow">›</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};