import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Mail, Phone, Linkedin, Award, Briefcase, Users, Globe } from "lucide-react"
import image1 from '../src/images/samip-image.jpeg';

import { Link } from "react-router-dom";
export const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Binod Pokhrel",
      role: "Founder & CEO",
      bio: "Binod Pokhrel is the visionary behind Proforma Insights, leading the company with a passion for innovation and excellence in business consultancy.",
      photo: "https://ca.slack-edge.com/T0A7S7AP7DH-U0A7S7NDXFD-36f3d614b897-512",
      email: "proformaconsultant@gmail.com",
      phone: "+977-984-XXXXXXX"
    },
    {
      id: 2,
      name: "Janak Subedi",
      role: "Chartered Accountant",
      bio: "Janak Subedi is a seasoned Chartered Accountant with expertise in financial management and strategic planning, ensuring our clients achieve their business goals.",
      photo: "https://ca.slack-edge.com/T0A7S7AP7DH-U0A7WHNKP38-b517aacc6dd6-512",
      email: "proformaconsultant@gmail.com",
      phone: "+977-984-XXXXXXX"
    },
    {
      id: 3,
      name: "Samit Paudel",
      role: "IT Officer",
      bio: "Samit Paudel manages our IT infrastructure and ensures seamless operations across all departments with cutting-edge technology solutions.",
      photo: "https://ca.slack-edge.com/T0A7S7AP7DH-U0A7V683CS1-598d13966583-512",
      email: "proformadigitaltech@gmail.com",
      phone: "+977-984-XXXXXXX"
    },
    {
      id: 4,
      name: "Suraj Pandey",
      role: "Chief Technology Officer",
      bio: "Suraj Pandey develops and maintains our web applications, ensuring they are robust, scalable, and user-friendly with modern tech stacks.",
      photo: "https://ca.slack-edge.com/T0A7S7AP7DH-U0A7H5PAN6B-52b3ce89f9e1-192",
      email: "proformadigitaltech@gmail.com",
      phone: "+977-984-XXXXXXX"
    },
    {
      id: 5,
      name: "Soonam Chaudary",
      role: "Finance Officer",
      bio: "Soonam handles our financial accounting with precision and ensures compliance with all regulatory requirements and standards.",
      photo: "https://ca.slack-edge.com/T0A7S7AP7DH-U0A8BKDR7TK-6d4bd0b0b613-512",
      email: "proformaconsultant@gmail.com",
      phone: "+977-984-XXXXXXX"
    },
    {
      id: 6,
      name: "Samip Baral",
      role: "Frontend Intern",
      bio: "Samip Baral is an frontend intern at Proforma Insights, contributing to various projects and learning from experienced professionals.",
      photo: image1,
      email: "samipbaral.proforma@gmail.com",
      phone: "+977-984-XXXXXXX"
    }
  ];

  const stats = [
    { icon: <Users size={32} />, value: "100+", label: "Happy Clients" },
    { icon: <Briefcase size={32} />, value: "100+", label: "Projects Completed" },
    { icon: <Award size={32} />, value: "5+", label: "Years Experience" },

  ];

  return (
    <div className="team-page">
      <Header />

      {/* Hero Section */}
      <div className="team-hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">

              Meet Our Team
            </h1>
            <p className="hero-subtitle">
              A dedicated team of professionals committed to delivering exceptional
              financial and business consulting services.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="team-stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Team Members Section */}
      <div className="team-container">
        <div className="team-header">
          <h2 className="team-section-title">Our Expert Team</h2>
          <p className="team-section-subtitle">
            Meet the talented individuals who make Proforma Insights a leader in business consultancy
          </p>
        </div>
        <div className="team-members-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-member-card">
              <div className="team-member-image-container">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="team-member-photo"
                />
                <div className="team-member-overlay">
                  <div className="contact-icons">

                    <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${member.email}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-icon"
                      title="Send Email" >
                      <Mail size={20} />
                    </a>

                    <a href={`tel:${member.phone}`} className="contact-icon" title="Call">
                      <Phone size={20} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-icon" title="LinkedIn">
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="team-member-info">
                <h3 className="team-member-name">{member.name}</h3>
                <div className="team-member-role-badge">{member.role}</div>
                <p className="team-member-bio">{member.bio}</p>

                <div className="team-member-contact">
                  <div className="contact-info">
                    <Mail size={16} />
                    <span className="contact-text">{member.email}</span>
                  </div>
                  <div className="contact-info">
                    <Phone size={16} />
                    <span className="contact-text">{member.phone}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container">
        <div className="team-cta-section">
          <h2 className="cta-title">Ready to Work With Our Team?</h2>
          <p className="cta-subtitle">
            Contact us today to discuss how our expert team can help your business grow
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="cta-button primary">
              Contact Us
            </Link>
            <Link to="/services" className="cta-button secondary">
              Our Services
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}