import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  try {
    return (
      <div className="App">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('App render error:', error);
    return <div>Error loading application</div>;
  }
}

export default App
