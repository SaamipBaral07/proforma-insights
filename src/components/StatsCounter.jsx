import { useState, useEffect, useRef } from 'react';

const CounterItem = ({ end, label, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let currentCount = 0;
    const increment = Math.ceil(end / 60);
    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(currentCount);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <div className="counter-item" ref={counterRef}>
      <div className="counter-number">
        {count}
        <span className="counter-suffix">{suffix}</span>
      </div>
      <div className="counter-label">{label}</div>
    </div>
  );
};

export function StatsCounter() {
  const containerRef = useRef(null);
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

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section className={`stats-counter-section ${isInView ? 'animate-in' : ''}`} ref={containerRef}>
      <div className="stats-counter-container">
        <div className="stats-counter-header">
          <h2 className="stats-counter-title">One Stop Solution</h2>
          <p className="stats-counter-subtitle">For Your Daily Needs.</p>
        </div>

        <div className="stats-counter-grid">
          <CounterItem end={10} label="Years of Experience" />
          <CounterItem end={2} label="Offices" />
          <CounterItem end={50} label="Employees" suffix="+" />
          <CounterItem end={100} label="Customer Satisfaction" suffix="%" />
        </div>
      </div>
    </section>
  );
}
