import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import React from "react";
import { InsightsCard } from "./components/InsightsCard";
import { Link } from "react-router-dom";
import "./Insights.css";

import market from '../src/images/market-analysis1.jpg';
import tech from '../src/images/techtrends.jpg';
import business from '../src/images/business-growth.jpg';
import accounting from '../src/images/accounting-practice.jpg';
import finance from '../src/images/finance-planning.jpg';
import digital from '../src/images/digital-transform.avif';
import { ChevronRight, Calendar, User, ArrowRight, BarChart, TrendingUp, Briefcase, FileText, Sparkles } from "lucide-react";

export const Insights = () => {
  const insights = [
    {
      id: 1,
      imageSrc: market,
      title: "Market Analysis 2024",
      excerpt: "Comprehensive analysis of emerging market trends and opportunities for strategic business growth.",
      link: "/insights/market-analysis-2024",
      category: "Market Research",
      date: "Jan 15, 2024",
      readTime: "8 min read",
      author: "Accounting Team",
      icon: <BarChart size={20} />
    },
    {
      id: 2,
      imageSrc: tech,
      title: "Tech Trends to Watch",
      excerpt: "Latest technological innovations shaping the future of business operations and digital transformation.",
      link: "/insights/tech-trends-to-watch",
      category: "Technology",
      date: "Jan 10, 2024",
      readTime: "6 min read",
      author: "IT Department",
      icon: <TrendingUp size={20} />
    },
    {
      id: 3,
      imageSrc: business,
      title: "Business Growth Strategies",
      excerpt: "Proven strategies and methodologies for sustainable business expansion and market dominance.",
      link: "/insights/business-growth-strategies",
      category: "Business",
      date: "Jan 5, 2024",
      readTime: "10 min read",
      author: "Accounting Team",
      icon: <Briefcase size={20} />
    },
    {
      id: 4,
      imageSrc: accounting,
      title: "Accounting Best Practices",
      excerpt: "Modern accounting practices and compliance standards for financial excellence and transparency.",
      link: "/insights/accounting-best-practices",
      category: "Finance",
      date: "Dec 28, 2023",
      readTime: "7 min read",
      author: "Accounting Team",
      icon: <FileText size={20} />
    },
    {
      id: 5,
      imageSrc: digital,
      title: "Digital Transformation Roadmap",
      excerpt: "Step-by-step guide to implementing successful digital transformation in your organization.",
      link: "/insights/digital-transformation-2024",
      category: "Digital",
      date: "Dec 20, 2023",
      readTime: "9 min read",
      author: "IT Department",
      icon: <TrendingUp size={20} />
    },
    {
      id: 6,
      imageSrc: finance,
      title: "Financial Planning 2024",
      excerpt: "Essential financial planning strategies for the upcoming fiscal year and beyond.",
      link: "/insights/financial-planning",
      category: "Finance",
      date: "Dec 15, 2023",
      readTime: "8 min read",
      author: "Finance Team",
      icon: <BarChart size={20} />
    }
  ];



  return (
    <div className="insights-page">
      <Header />
      
      {/* Hero Section */}
      <div className="insights-hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">
               Insights
            </h1>
            <p className="hero-subtitle">
              Stay ahead with our latest research, analysis, and thought leadership in business, 
              technology, and finance.
            </p>
            
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="insights-container">
        <div className="insights-header">
          <h2 className="insights-section-title">Latest Insights</h2>
          <p className="insights-section-subtitle">
            Discover valuable perspectives and actionable advice from our team of experts
          </p>
        </div>
        {/* Insights Grid */}
        <div className="insights-grid">
          {insights.map((insight) => (
            <div key={insight.id} className="insight-card-wrapper">
              <InsightsCard 
                imageSrc={insight.imageSrc}
                title={insight.title}
                excerpt={insight.excerpt}
                link={insight.link}
                category={insight.category}
                date={insight.date}
                readTime={insight.readTime}
                author={insight.author}
                icon={insight.icon}
              />
              <Link to={insight.link} className="read-more-link">
                Read Full Article
                <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="insights-newsletter">
          <div className="newsletter-content">
            <h3 className="newsletter-title">Stay Updated</h3>
            <p className="newsletter-subtitle">
              Subscribe to our newsletter and never miss an insight. Get the latest articles delivered directly to your inbox.
            </p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-btn">
                Subscribe
                <ChevronRight size={18} />
              </button>
            </form>
            <p className="newsletter-note">
              By subscribing, you agree to our Privacy Policy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}