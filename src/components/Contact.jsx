import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }
    
    if (!isValidEmail(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }
    
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      company: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p>Ready to transform your business? Let's discuss your needs.</p>
            <div className="contact-details">
              <p>Email: soren@centerconsulting.com</p>
              <p>Phone: 416 605-8569</p>
              <p>Address: 123 Business Ave, Suite 100, City, State 12345</p>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name"
              placeholder="Your Name" 
              value={formData.name}
              onChange={handleInputChange}
              required 
            />
            <input 
              type="email" 
              name="email"
              placeholder="Your Email" 
              value={formData.email}
              onChange={handleInputChange}
              required 
            />
            <input 
              type="text" 
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleInputChange}
            />
            <textarea 
              name="message"
              placeholder="Message" 
              rows="5" 
              value={formData.message}
              onChange={handleInputChange}
              required
            />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;