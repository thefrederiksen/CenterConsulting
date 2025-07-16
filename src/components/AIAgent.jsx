import React from 'react';

const aiFeatures = [
  {
    title: 'Custom AI Agent Design',
    description: 'Tailored agent architectures to fit your business needs.'
  },
  {
    title: 'Seamless Integration',
    description: 'Integrate AI agents with your current systems and workflows.'
  },
  {
    title: 'End-to-End Development',
    description: 'From concept to deployment, we handle the full AI agent lifecycle.'
  },
  {
    title: 'Ongoing Optimization',
    description: 'Continuous improvement and support for your AI-driven processes.'
  }
];

const AIAgent = () => (
  <section className="about ai-agent-page">
    <div className="container">
      <h2>AI Agent Architecture and Development</h2>
      <p style={{textAlign: 'center', fontSize: '1.2rem', color: '#666', marginBottom: '2.5rem', maxWidth: 700, marginLeft: 'auto', marginRight: 'auto'}}>
        Unlock the power of automation and intelligent decision-making. We design, build, and integrate custom AI agents that drive efficiency, insight, and innovation for your business.
      </p>
      <div className="features">
        {aiFeatures.map((feature, idx) => (
          <div className="feature" key={idx}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AIAgent; 