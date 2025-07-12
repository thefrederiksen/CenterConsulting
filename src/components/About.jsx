import React from 'react';

const About = () => {
  const features = [
    {
      title: "Strategic Planning",
      description: "Comprehensive business strategy development"
    },
    {
      title: "Operational Excellence", 
      description: "Process optimization and efficiency improvements"
    },
    {
      title: "Digital Transformation",
      description: "Technology integration and modernization"
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About CenterConsulting</h2>
        <p>We are a leading consulting firm dedicated to helping businesses achieve their strategic objectives through data-driven insights and proven methodologies.</p>
        <div className="features">
          {features.map((feature, index) => (
            <div key={index} className="feature">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;