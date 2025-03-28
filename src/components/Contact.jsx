import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    propertyCount: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    alert('Thank you for your message! We will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      propertyCount: ''
    });
  };

  return (
    <div className="contact">
      <section className="contact-hero">
        <div className="container">
          <h1>Get In Touch</h1>
          <p>We'd love to discuss how ApartmentPro can work for your properties</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-form">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                />
              </div>
              <div className="form-group">
                <label htmlFor="propertyCount">Number of Units Managed</label>
                <select 
                  id="propertyCount" 
                  name="propertyCount" 
                  value={formData.propertyCount} 
                  onChange={handleChange}
                >
                  <option value="">Select...</option>
                  <option value="1-50">1-50</option>
                  <option value="51-200">51-200</option>
                  <option value="201-500">201-500</option>
                  <option value="500+">500+</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">How Can We Help?</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  rows="5"
                ></textarea>
              </div>
              <button type="submit" className="btn primary">Submit</button>
            </form>
          </div>

          <div className="contact-info">
            <h2>Contact Information</h2>
            <div className="info-item">
              <h3>Email</h3>
              <p>sagarshegunasi2664@gmail.com</p>
            </div>
            <div className="info-item">
              <h3>Phone</h3>
              <p>+91 8904646173</p>
            </div>
            <div className="info-item">
              <h3>Office Address</h3>
              <p>Vidhy Nagar<br />Hubli, Karnataka 560031<br />India</p>
            </div>
            <div className="info-item">
              <h3>Business Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      <section className="demo-cta">
        <div className="container">
          <h2>Ready to See ApartmentPro in Action?</h2>
          <p>Schedule a personalized demo with one of our product specialists.</p>
          <button className="btn primary">Schedule a Demo</button>
        </div>
      </section>
    </div>
  );
};

export default Contact;