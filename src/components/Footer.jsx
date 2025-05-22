import React from 'react';
import { FaGithub, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-scroll'; 

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center md:items-start">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2 text-center text-blue-500">Allen.AJ</h3>
            <nav className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-4">
              <Link to="home" smooth duration={500} className="text-gray-300 hover:text-blue-500 transition-colors cursor-pointer">Home</Link>
              <Link to="about" smooth duration={500} className="text-gray-300 hover:text-blue-500 transition-colors cursor-pointer">About</Link>
              <Link to="certi" smooth duration={500} className="text-gray-300 hover:text-blue-500 transition-colors cursor-pointer">Certificates</Link>
              <Link to="project" smooth duration={500} className="text-gray-300 hover:text-blue-500 transition-colors cursor-pointer">Projects</Link>
              <Link to="contact" smooth duration={500} className="text-gray-300 hover:text-blue-500 transition-colors cursor-pointer">Contact</Link>
            </nav>
          </div>
          <div className="text-center">
            <h4 className="text-md font-semibold mb-2">Connect with me:</h4>
            <div className="flex justify-center space-x-4 text-xl">
              <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="text-blue-500 bg-blue-500/10 rounded-full hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                <FaGithub />
              </a>
              <a href="https://facebook.com/your-facebook" target="_blank" rel="noopener noreferrer" className="text-blue-500 bg-blue-500/10 rounded-full hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                <FaFacebook />
              </a>
              <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="text-blue-500 bg-blue-500/10 rounded-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                <FaLinkedin />
              </a>
              <a href="https://instagram.com/your-instagram" target="_blank" rel="noopener noreferrer" className="text-blue-500 bg-blue-500/10 rounded-md hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="text-center">
            <h4 className="text-md font-semibold mb-2">Contact Info:</h4>
            <p className='text-blue-500'>Phone: +63 9811732889</p>
            <p className='text-blue-500'>Email: your.email@example.com</p>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-800 text-center text-blue-400 text-sm">
          &copy; {new Date().getFullYear()} Allen.AJ All rights reserved.
        </div>
      </div>
    </footer>
  );
};