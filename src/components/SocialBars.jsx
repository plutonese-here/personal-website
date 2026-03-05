import Reveal from './Reveal';

const SocialBars = () => {
  return (
    <>
      {/* --- DESKTOP ONLY: Right Side Socials --- */}
      <div className="hidden md:flex fixed top-0 right-12 xl:right-20 flex-col items-center z-50">
        
        <Reveal>
          <div className="w-[1px] h-32 bg-text-muted opacity-50 mb-6 mx-auto"></div>
        </Reveal>
        
        <Reveal cascade className="flex flex-col items-center gap-6">
          <div>
            <a href="#" target="_blank" rel="noreferrer" className="block text-text-muted hover:text-accent hover:-translate-x-1 active:text-accent active:-translate-x-1 transition-all duration-[250ms] ease-[cubic-bezier(0.645,0.045,0.355,1)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
          </div>
          <div>
            <a href="#" target="_blank" rel="noreferrer" className="block text-text-muted hover:text-accent hover:-translate-x-1 active:text-accent active:-translate-x-1 transition-all duration-[250ms] ease-[cubic-bezier(0.645,0.045,0.355,1)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
          <div>
            <a href="#" target="_blank" rel="noreferrer" className="block text-text-muted hover:text-accent hover:-translate-x-1 active:text-accent active:-translate-x-1 transition-all duration-[250ms] ease-[cubic-bezier(0.645,0.045,0.355,1)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </a>
          </div>
          <div>
            <a href="#" target="_blank" rel="noreferrer" className="block text-text-muted hover:text-accent hover:-translate-x-1 active:text-accent active:-translate-x-1 transition-all duration-[250ms] ease-[cubic-bezier(0.645,0.045,0.355,1)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path></svg>
            </a>
          </div>
          <div>
            <a href="mailto:your-email@example.com" className="block text-text-muted hover:text-accent hover:-translate-x-1 active:text-accent active:-translate-x-1 transition-all duration-[250ms] ease-[cubic-bezier(0.645,0.045,0.355,1)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
          </div>
        </Reveal>
      </div>
    </>
  );
};

export default SocialBars;