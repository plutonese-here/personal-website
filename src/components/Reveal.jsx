import { useEffect, useRef, useState } from 'react';

const Reveal = ({ children, cascade = false, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // FIXED: Only trigger when it comes INTO view
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Immediately stop observing it so it can never trigger a jitter loop again!
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        threshold: 0.05, 
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  if (cascade) {
    return (
      <div ref={ref} className={`reveal-container ${isVisible ? 'is-visible' : ''} ${className}`}>
        {children}
      </div>
    );
  }

  // FIXED: Back to a single, clean wrapper div! Your flexbox and alignment classes will work perfectly now.
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-[cubic-bezier(0.645,0.045,0.355,1)] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Reveal;