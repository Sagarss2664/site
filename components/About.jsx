import React from 'react';

const About = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="container">
          <h1>About ApartmentPro</h1>
          <p>Innovative solutions for modern apartment management</p>
        </div>
      </section>

      <section className="mission">
        <div className="container">
          <h2>Our Mission</h2>
          <p>At ApartmentPro, we're dedicated to transforming the apartment management industry through technology. Our mission is to simplify complex processes, enhance communication between management and residents, and create smarter living spaces through innovative software solutions.</p>
          <p>Founded in 2023 by a team of university graduates passionate about real estate technology, we've grown to serve apartment complexes across the region with our comprehensive management platform.</p>
        </div>
      </section>

      <section className="values">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Innovation</h3>
              <p>We constantly push boundaries to deliver cutting-edge solutions that anticipate industry needs.</p>
            </div>
            <div className="value-card">
              <h3>Integrity</h3>
              <p>We build trust through transparency, honesty, and ethical business practices.</p>
            </div>
            <div className="value-card">
              <h3>Customer Focus</h3>
              <p>Our success is measured by our clients' success and satisfaction.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;