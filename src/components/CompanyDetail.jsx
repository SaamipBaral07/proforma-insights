import React, { useState, useRef, useEffect } from 'react';
import { Crosshair, Star, Rocket } from 'lucide-react';

export const CompanyDetail = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
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

  const companyDetails = [
    {
      id: 1,
      title: 'Our Mission',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      icon: Crosshair,
      content: [
        'Empower businesses with expert consultancy',
        'Provide innovative IT solutions',
        'Drive growth and efficiency',
        'Success in digital landscape'
      ]
    },
    {
      id: 2,
      title: 'Benefits',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
      icon: Star,
      content: [
        'Expertise: Seasoned consultants',
        'Customized Solutions: Tailored services',
        'Comprehensive Services: One roof',
        'Client-Centric Approach: Your success'
      ]
    },
    {
      id: 3,
      title: 'Our Goal',
      image: 'https://static.vecteezy.com/system/resources/thumbnails/013/446/843/small/the-red-figure-of-a-man-stands-on-a-tower-of-cubes-with-the-word-goal-leadership-skills-the-concept-of-achieving-the-goal-dedication-and-diligence-overcoming-obstacles-and-thinking-extraordinarily-photo.jpg',
      icon: Rocket,
      content: [
        'Leading provider of consultancy',
        'Recognized for excellence',
        'Build long-term partnerships',
        'Navigate challenges successfully'
      ]
    }
  ];

  return (
    <section className={`company-detail-container ${isInView ? 'animate-in' : ''}`} ref={sectionRef}>
      <div className="company-detail-header">
        <h2 className="company-detail-title">More About Proforma</h2>
        <p className="company-detail-subtitle">Proforma Helps You To Upgrade Your Business</p>
        <div className="company-detail-underline"></div>
      </div>

      <div className="company-cards-grid">
        {companyDetails.map((detail) => {
          const IconComponent = detail.icon;
          return (
            <div
              key={detail.id}
              className="company-detail-card"
              onMouseEnter={() => setHoveredCard(detail.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image Container */}
              <div className="detail-card-image-container">
                <img
                  src={detail.image}
                  alt={detail.title}
                  className="detail-card-image"
                />

                {/* Overlay Content */}
                <div className={`detail-card-overlay ${hoveredCard === detail.id ? 'active' : ''}`}>
                  <div className="overlay-content">
                    <div className="overlay-icon-wrapper">
                      <IconComponent size={48} color="#ffc107" strokeWidth={1.5} />
                    </div>
                    <h3 className="overlay-title">{detail.title}</h3>
                    <ul className="overlay-list">
                      {detail.content.map((item, index) => (
                        <li key={index} className="overlay-list-item">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card Title (visible when not hovering) */}
              <div className={`detail-card-title-section ${hoveredCard === detail.id ? 'hidden' : ''}`}>
                <div className="detail-card-icon-wrapper">
                  <IconComponent size={40} color="#007bff" strokeWidth={1.5} />
                </div>
                <h3 className="detail-card-title">{detail.title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};