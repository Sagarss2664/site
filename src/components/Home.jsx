import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <h1>Revolutionizing Apartment Management</h1>
          <p>Streamline operations, enhance resident experience, and maximize profitability with our comprehensive apartment management solution.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn primary">Get Started</Link>
            <Link to="/services" className="btn secondary">Learn More</Link>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <div className="stat-item">
            <h2>120+</h2>
            <p>Happy Clients</p>
          </div>
          <div className="stat-item">
            <h2>95%</h2>
            <p>Customer Satisfaction</p>
          </div>
          <div className="stat-item">
            <h2>24/7</h2>
            <p>Support Available</p>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Why Choose ApartmentPro?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="icon">📱</div>
              <h3>Mobile-First Approach</h3>
              <p>Manage your apartment complex from anywhere with our intuitive mobile app.</p>
            </div>
            <div className="feature-card">
              <div className="icon">💰</div>
              <h3>Cost Effective</h3>
              <p>Reduce operational costs by up to 40% with our automated solutions.</p>
            </div>
            <div className="feature-card">
              <div className="icon">🔒</div>
              <h3>Secure Platform</h3>
              <p>Bank-level security to protect your data and your residents' privacy.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2>What Our Clients Say</h2>
          <div className="testimonial-card">
            <p>"ApartmentPro transformed how we manage our 200-unit complex. Maintenance requests are handled 3x faster and our residents love the app!"</p>
            <div className="author">- President, Akshya Garden Apartment</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;