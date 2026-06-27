import React from 'react';
import { FaGithub, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-scroll';

export const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12 text-slate-400">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3">
          <div className="text-center md:text-left">
            <h3 className="mb-3 text-lg font-semibold text-cyan-300">Allen.Orcino</h3>
            <nav className="flex flex-col items-center space-y-2 md:items-start md:space-y-2">
              <Link to="home" smooth duration={500} className="cursor-pointer text-slate-300 transition hover:text-cyan-300">Home</Link>
              <Link to="about" smooth duration={500} className="cursor-pointer text-slate-300 transition hover:text-cyan-300">About</Link>
              <Link to="certi" smooth duration={500} className="cursor-pointer text-slate-300 transition hover:text-cyan-300">Certificates</Link>
              <Link to="project" smooth duration={500} className="cursor-pointer text-slate-300 transition hover:text-cyan-300">Projects</Link>
              <Link to="contact" smooth duration={500} className="cursor-pointer text-slate-300 transition hover:text-cyan-300">Contact</Link>
            </nav>
          </div>

          <div className="text-center">
            <h4 className="mb-3 text-md font-semibold text-white">Connect with me</h4>
            <div className="flex justify-center space-x-4 text-xl">
              <a href="https://github.com/AJOrcino" target="_blank" rel="noopener noreferrer" className="rounded-full bg-cyan-400/10 p-3 text-cyan-300 transition hover:bg-cyan-400/20 hover:text-cyan-200">
                <FaGithub />
              </a>
              <a href="https://facebook.com/your-facebook" target="_blank" rel="noopener noreferrer" className="rounded-full bg-cyan-400/10 p-3 text-cyan-300 transition hover:bg-cyan-400/20 hover:text-cyan-200">
                <FaFacebook />
              </a>
              <a href="https://www.linkedin.com/in/allen-jefferson-orcino-b82924322/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-cyan-400/10 p-3 text-cyan-300 transition hover:bg-cyan-400/20 hover:text-cyan-200">
                <FaLinkedin />
              </a>
              <a href="https://instagram.com/your-instagram" target="_blank" rel="noopener noreferrer" className="rounded-full bg-cyan-400/10 p-3 text-cyan-300 transition hover:bg-cyan-400/20 hover:text-cyan-200">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h4 className="mb-3 text-md font-semibold text-white">Contact Info</h4>
            <p className="text-slate-300">Phone: +63 981 173 2889</p>
            <p className="mt-2 text-slate-300">Email: allenjeffersonorcino@gmail.com</p>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-4 text-center text-sm text-cyan-300">
          &copy; {new Date().getFullYear()} Allen.Orcino. All rights reserved.
        </div>
      </div>
    </footer>
  );
};