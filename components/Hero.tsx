'use client';

import { Github, Linkedin, Download, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const titles = [
    'React Native Developer',
    'Mobile Apps Developer',
    'Cross-Platform Developer',
    'React Native Developer',
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    let timeout: NodeJS.Timeout;

    if (!isDeleting && charIndex < currentTitle.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentTitle.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (!isDeleting && charIndex === currentTitle.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentTitle.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCurrentIndex((currentIndex + 1) % titles.length);
      setCharIndex(0);
      setDisplayedText('');
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [charIndex, isDeleting, currentIndex, titles]);

  const downloadResume = () => {
    setIsDownloading(true);
    const link = document.createElement('a');
    link.href = '/resume/Niket_RN_Dev_Resume.pdf';
    link.download = 'Niket_RN_Dev_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setIsDownloading(false), 2000);
  };

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto max-w-4xl lg:max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-black/10 relative shadow-[0_0_40px_rgba(0,0,0,0.05)]">
              <Image
                src="/img/meimage.jpeg"
                alt="Niket Dadhaniya"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-center md:text-left flex-1 max-w-md"
          >
            <p className="text-black/40 mb-2 font-mono uppercase tracking-widest text-xs sm:text-sm">Hello, I'm</p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-black mb-4 font-sans tracking-tight">
              Niket Dadhaniya
            </h1>
            <div className="text-xl sm:text-2xl text-black/80 font-mono mb-8 border-l-4 border-black pl-4 h-[1.5em] flex items-center min-w-full sm:min-w-[350px] md:min-w-0">
              <span className="whitespace-nowrap overflow-hidden">
                {displayedText}
                <span className="typing-cursor ml-1">|</span>
              </span>
            </div>
            <p className="text-sm sm:text-base text-black/40 mb-10 font-mono">
              Surat, Gujarat, India <br />
              <a href="mailto:dadyaniyaniket153@gmail.com" className="text-black/80 hover:text-black transition-colors decoration-1 underline underline-offset-4">dadyaniyaniket153@gmail.com</a> <br />
              <a href="tel:+919978892153" className="text-black/80 hover:text-black transition-colors decoration-1 underline underline-offset-4">+91 9978892153</a>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center md:justify-start items-center sm:items-stretch">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={downloadResume}
                disabled={isDownloading}
                className="w-64 sm:w-auto px-8 py-3 bg-black text-white border-2 border-black rounded-full font-bold hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-widest"
              >
                <Download size={18} />
                Download CV
              </motion.button>

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('#contact')}
                className="w-64 sm:w-auto px-8 py-3 border-2 border-black text-black rounded-full font-bold hover:bg-black hover:text-white transition-all text-sm uppercase tracking-widest"
              >
                Contact
              </motion.button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center md:justify-start">
              <motion.a
                href="https://github.com/Niket47"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-black/40 hover:text-black transition-all"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/niket-dadhaniya-app/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-black/40 hover:text-black transition-all"
              >
                <Linkedin size={24} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <button
            onClick={() => scrollToSection('#about')}
            className="text-black/20 hover:text-black transition-colors flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown size={20} />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
