import { useRef, useEffect, useState } from 'react';
import heroImage from '../images/proforma-office.jpg';

export const HeroSection = () => {
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

  return (
    <section className={`hero-section ${isInView ? 'animate-in' : ''}`} ref={sectionRef}>
      <div className="hero-container">
        <div className="hero-image">
          <img src={heroImage} alt="Proforma Hero" />
        </div>
        
        <div className="hero-content">
          <h2 className="hero-title">
            The Remote and Physical Business Consultancy With All Related IT Services.
            {/* <span className="hero-highlight"> IT Services </span> */}
          </h2>
          <p className="hero-subtitle">Professional consultancy to drive business growth and profitability</p>
          <div className="hero-features">
            <div className="hero-feature-item">
              <div className="feature-icon">✓</div>
              <span>Expert Consultants</span>
            </div>
            <div className="hero-feature-item">
              <div className="feature-icon">✓</div>
              <span>Proven Solutions</span>
            </div>
            <div className="hero-feature-item">
              <div className="feature-icon">✓</div>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};