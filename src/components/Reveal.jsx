import { useEffect, useRef, useState } from 'react';

const Reveal = ({ children, cascade = false, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15, 
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  // If cascade is true, apply the CSS class that staggers the children automatically
  if (cascade) {
    return (
      <div ref={ref} className={`reveal-container ${isVisible ? 'is-visible' : ''} ${className}`}>
        {children}
      </div>
    );
  }

  // Default behavior: animate the entire block at once
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Reveal;