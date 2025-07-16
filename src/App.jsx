import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAgent from './components/AIAgent';

function App() {
  try {
    return (
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <About />
                  <Services />
                  <Contact />
                </>
              } />
              <Route path="/ai-agent" element={<AIAgent />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    );
  } catch (error) {
    console.error('App render error:', error);
    return <div>Error loading application</div>;
  }
}

export default App
