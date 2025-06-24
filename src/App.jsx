import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <About/>
      <Contact />
    </div>
  );
}
