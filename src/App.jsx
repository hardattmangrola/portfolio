import React from 'react';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import EducationAwards from './components/EducationAwards';

function App() {
  return (
    <div className="relative text-white font-sans selection:bg-blue-500 selection:text-white">
      <Background />
      <Navbar />

      <main className="relative z-10 flex flex-col gap-10">
        <Hero />
        <div className="max-w-7xl mx-auto w-full flex flex-col gap-10 pb-20">
          <Skills />
          <Projects />
          <Experience />
          <EducationAwards />
        </div>
      </main>

      <footer className="relative z-10 py-8 text-center text-gray-500 text-sm font-mono border-t border-white/5">
        <p>&copy; {new Date().getFullYear()} Hardatt. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}

export default App;
