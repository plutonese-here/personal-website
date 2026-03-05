import { useState, useEffect } from 'react';
import Reveal from './Reveal';

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      
      {/* 1. Hero Content */}
      <header className="max-w-4xl mx-auto w-full relative -top-[72px] md:top-0">
        
        <Reveal cascade>
          <p className="font-mono text-accent mb-4 tracking-wide text-[16px] md:text-sm">
            Hi, my name is
          </p>
          
          <h1 className="text-4xl md:text-6xl font-bold text-text-bright mb-2 tracking-tight">
            Ahsan.
          </h1>
          
          <h2 className="text-3xl md:text-5xl font-bold text-text-main leading-tight mb-6 tracking-tight opacity-80">
            I build things for the web.
          </h2>
          
          <p className="max-w-2xl text-base mb-10 text-text-muted leading-relaxed">
            I’m a software engineering student and data analyst based in Dhaka. 
            I specialize in building clean, functional, and data-driven digital experiences. 
            Currently, I'm exploring new datasets and building projects at{' '}
            <a href="#" className="inline-link">
              My University
            </a>.
          </p>
          
          <div className="mt-8 grid grid-cols-2 gap-4 md:flex md:flex-row md:gap-5">
            <a href="#portfolio" className="btn-v4 text-xs md:text-sm px-4 py-3 md:px-6 md:py-4">See Portfolio</a>
            <a href="#blog" className="btn-v4 text-xs md:text-sm px-4 py-3 md:px-6 md:py-4">Read Blog</a>
            <a href="#about" className="btn-v4 text-xs md:text-sm px-4 py-3 md:px-6 md:py-4">Learn More</a>
            <a href="mailto:your-email@example.com" className="btn-v4 text-xs md:text-sm px-4 py-3 md:px-6 md:py-4">Get In Touch</a>
          </div>
        </Reveal>

        {/* 2. Mobile Socials */}
        <div className="md:hidden w-full flex justify-end mt-[84px] pb-8">
          <Reveal cascade className="flex flex-row-reverse items-center">
            
            <div className="h-[1px] w-12 sm:w-20 bg-text-muted opacity-50 ml-5 -mr-6"></div>
            
            <a href="#" className="block text-text-muted hover:text-accent active:text-accent hover:-translate-y-1 active:-translate-y-1 transition-all duration-[250ms] ease-[cubic-bezier(0.645,0.045,0.355,1)] ml-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a href="#" className="block text-text-muted hover:text-accent active:text-accent hover:-translate-y-1 active:-translate-y-1 transition-all duration-[250ms] ease-[cubic-bezier(0.645,0.045,0.355,1)] ml-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="#" className="block text-text-muted hover:text-accent active:text-accent hover:-translate-y-1 active:-translate-y-1 transition-all duration-[250ms] ease-[cubic-bezier(0.645,0.045,0.355,1)] ml-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </a>
            <a href="#" className="block text-text-muted hover:text-accent active:text-accent hover:-translate-y-1 active:-translate-y-1 transition-all duration-[250ms] ease-[cubic-bezier(0.645,0.045,0.355,1)] ml-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path></svg>
            </a>
            <a href="mailto:your-email@example.com" className="block text-text-muted hover:text-accent active:text-accent hover:-translate-y-1 active:-translate-y-1 transition-all duration-[250ms] ease-[cubic-bezier(0.645,0.045,0.355,1)] ml-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
            
          </Reveal>
        </div>
      </header>

      {/* 3. --- SCROLL DOWN INDICATOR --- */}
      <div 
        className={`absolute bottom-28 md:bottom-10 left-1/2 -translate-x-1/2 transition-opacity duration-500 z-10 ${
          isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <div className="flex flex-col items-center">
          
          {/* Changed text-accent to text-text-muted */}
          <span className="font-mono text-[10px] tracking-tighter text-text-muted uppercase leading-none z-10">
            SCROLL DOWN
          </span>
          
          <div className="animate-poke-down -mt-1">
            {/* Changed text-accent to text-text-muted */}
            <span className="inline-block text-text-muted text-2xl rotate-90 leading-none">▹</span>
          </div>
          
        </div>
      </div>

    </section>
  );
};

export default Hero;