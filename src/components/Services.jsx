import React from 'react';

const Services = () => {
  const services = [
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
    },
    {
      title: "Financial Advisory",
      description: "Financial planning, budgeting, and performance metrics"
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;