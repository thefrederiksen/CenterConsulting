import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "AI Agent Architecture and development",
      description: "Custom AI agent solutions, architecture design, and development services"
    },
    {
      title: "Business Strategy",
      description: "Market analysis, competitive positioning, and growth strategies"
    },
    {
      title: "Process Improvement",
      description: "Workflow optimization and operational efficiency enhancement"
    },
    {
      title: "Change Management",
      description: "Organizational transformation and employee engagement"
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => {
            if (service.title === "AI Agent Architecture and development") {
              return (
                <Link to="/ai-agent" key={index} className="service-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </Link>
              );
            }
            return (
              <div key={index} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;