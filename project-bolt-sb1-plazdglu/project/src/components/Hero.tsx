import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-100 rounded-full opacity-70"></div>
        <div className="absolute top-40 -left-20 w-60 h-60 bg-indigo-100 rounded-full opacity-50"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-indigo-100 rounded-full opacity-60"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            Hi, I'm <span className="text-indigo-600">Adapareddy Harika</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            A passionate <span className="font-semibold">Frontend Developer</span> looking to create impactful digital experiences
          </p>
          
          <div className="flex justify-center space-x-4 mb-10">
            <a href="#" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg">
              View My Work
            </a>
            <a href="#contact" className="bg-white hover:bg-gray-100 text-indigo-600 border border-indigo-600 px-6 py-3 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg">
              Contact Me
            </a>
          </div>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:alex@example.com" className="text-gray-600 hover:text-indigo-600 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-gray-500 hover:text-indigo-600 transition-colors">
            <ChevronDown size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;