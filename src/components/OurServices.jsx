import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BarChart3, Calculator, AlertCircle, Users } from 'lucide-react';

export const OurServices = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(0);

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

  // Animation variants for the whole section
  const sectionVariants = {
    hidden: {
      opacity: 0,
      x: -100
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        when: "beforeChildren",
        staggerChildren: 0.15
      }
    }
  };

  // Animation variants for child elements
  const childVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  // Animation variants for service icons
  const iconVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.div
      className="our-services-section-clean"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="our-services-container-clean">
        {/* Header */}
        <motion.div className="our-services-header-clean" variants={childVariants}>
          <h2 className="our-services-title-clean">Our Services</h2>
          <motion.div
            className="our-services-underline-clean"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p className="our-services-subtitle-clean" variants={childVariants}>
          Our strength is ability to understand the needs of our clients and their business to create customized solutions and meet those clients' needs.
        </motion.p>

        {/* Icons Grid */}
        <motion.div className="our-services-icons-grid-clean" variants={childVariants}>
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                className={`service-icon-container-clean ${index === selectedService ? 'active' : ''}`}
                onClick={() => handleServiceSelect(index)}
                variants={iconVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div
                  className="service-icon-wrapper-clean"
                  style={{ borderColor: service.color }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: '0 12px 35px rgba(0, 123, 255, 0.25)',
                    transition: { duration: 0.3 }
                  }}
                >
                  <IconComponent size={50} color={service.color} strokeWidth={1.5} />
                </motion.div>
                <p className="service-icon-label-clean">{service.title}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Description Section */}
        <motion.div className="service-description-section-clean" variants={childVariants}>
          <div className="service-description-divider-clean"></div>

          <motion.div
            className="service-description-container-clean"
            key={selectedService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h3 className="service-selected-title-clean">
              {services[selectedService].title}
            </h3>

            <p className="service-selected-description-clean">
              {services[selectedService].description}
            </p>

            <motion.button
              className="service-detail-button-clean"
              onClick={() => navigate(services[selectedService].path)}
              whileHover={{
                y: -3,
                boxShadow: '0 8px 25px rgba(0, 123, 255, 0.4)',
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              Learn more
              <span className="arrow">›</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};