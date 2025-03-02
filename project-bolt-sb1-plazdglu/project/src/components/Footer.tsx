import React from 'react';
import { ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold text-white">Portfolio</a>
            <p className="text-gray-400 mt-2">
              Frontend Developer | UI/UX Enthusiast
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button 
              onClick={scrollToTop}
              className="bg-indigo-600 hover:bg-indigo-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors mb-4"
            >
              <ChevronUp size={20} />
            </button>
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Adapareddy Harika. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;