import { useState, useEffect, useRef } from 'react';
import Reveal from './Reveal';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [tabProps, setTabProps] = useState({ width: 0, height: 0, left: 0, top: 0 });
  const [isScrolledToEnd, setIsScrolledToEnd] = useState(false);
  
  const tabsRef = useRef([]); 
  const scrollContainerRef = useRef(null); 

  const jobs = [
    {
      company: 'Current Company',
      title: 'Data Management Assistant',
      range: 'January 2026 - Present',
      details: [
        'Manage, clean, and analyze complex datasets to drive organizational decision-making and improve data accessibility.',
        'Collaborate with cross-functional teams to automate data pipelines and ensure high-fidelity data integrity.',
        'Develop internal tools and dashboards using Python and SQL to streamline reporting processes.'
      ]
    },
    {
      company: 'Previous Corp',
      title: 'Intern',
      range: 'June 2025 - December 2025',
      details: [
        'Assisted the data team in migrating legacy databases to modern, scalable infrastructure.',
        'Performed exploratory data analysis (EDA) to identify trends and anomalies in user behavior.',
        'Gained hands-on experience with modern web frameworks and collaborative version control.'
      ]
    },
    {
      company: 'Tech Agency',
      title: 'Web Developer Intern',
      range: 'January 2025 - May 2025',
      details: [
        'Built and shipped responsive, accessible user interfaces using React and Tailwind CSS.',
        'Worked closely with designers to translate Figma mockups into pixel-perfect frontend code.',
        'Optimized web applications for maximum speed and cross-browser compatibility.'
      ]
    },
    {
      company: 'University',
      title: 'Project Lead',
      range: 'August 2024 - December 2024',
      details: [
        'Led a team of student developers to build a full-stack campus utility application.',
        'Architected the database schema and implemented RESTful APIs for seamless frontend integration.',
        'Conducted code reviews and managed project timelines using Agile methodologies.'
      ]
    }
  ];

  const updateTabProps = () => {
    const activeNode = tabsRef.current[activeTab];
    if (activeNode) {
      setTabProps({
        width: activeNode.offsetWidth,
        height: activeNode.offsetHeight,
        left: activeNode.offsetLeft,
        top: activeNode.offsetTop,
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setIsScrolledToEnd(scrollLeft + clientWidth >= scrollWidth - 5);
    }
  };

  useEffect(() => {
    updateTabProps();
    handleScroll(); 
    
    window.addEventListener('resize', updateTabProps);
    window.addEventListener('resize', handleScroll);
    
    return () => {
      window.removeEventListener('resize', updateTabProps);
      window.removeEventListener('resize', handleScroll);
    };
  }, [activeTab]);

  return (
    <section id="experience" className="max-w-3xl mx-auto py-24">
      <Reveal>
        <h2 className="flex items-center text-2xl md:text-3xl font-bold text-text-main mb-10 whitespace-nowrap">
          <span className="font-mono text-accent text-lg md:text-xl font-normal mr-3 mt-1">02.</span>
          Where I've Worked
          <div className="h-[1px] bg-[#E89544] opacity-20 w-full flex-grow max-w-[100px] md:max-w-[300px] ml-4 md:ml-6"></div>
        </h2>
      </Reveal>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12 min-h-[300px]">
        
        {/* --- TABS NAVIGATION WRAPPER --- */}
        <Reveal className="relative md:w-1/4">
          
          <div 
            className={`md:hidden absolute right-0 top-0 h-12 flex items-center justify-end bg-black/50 pr-2 pl-6 z-20 pointer-events-none rounded-l-md transition-opacity duration-300 ${
              isScrolledToEnd ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <span className="text-accent text-4xl animate-poke leading-none mb-1 shadow-black drop-shadow-md">▹</span>
          </div>

          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="relative flex overflow-x-auto md:flex-col scrollbar-hide border-b-2 md:border-b-0 md:border-l-2 border-text-muted/20" 
          >
            
            {/* --- THE HYBRID GLIDING HIGHLIGHT --- */}
            {/* Added 'border border-accent rounded' while keeping the bg-accent/10! */}
            <div 
              className="absolute left-0 top-0 z-0 bg-accent/10 border border-accent rounded transition-all duration-[250ms] ease-[cubic-bezier(0.645,0.045,0.355,1)]"
              style={{
                width: `${tabProps.width}px`,
                height: `${tabProps.height}px`,
                transform: `translate(${tabProps.left}px, ${tabProps.top}px)`
              }}
            >
              {/* Mobile: Orange bottom line overlapping the gray border */}
              <div className="md:hidden absolute bottom-[-2px] left-[-1px] w-[calc(100%+2px)] h-[2px] bg-accent"></div>
              {/* Desktop: Orange left line overlapping the gray border */}
              <div className="hidden md:block absolute top-[-1px] left-[-2px] w-[2px] h-[calc(100%+2px)] bg-accent"></div>
            </div>

            {jobs.map((job, index) => (
              <button
                key={index}
                ref={el => tabsRef.current[index] = el} 
                onClick={() => setActiveTab(index)}
                className={`
                  relative z-10 flex-none h-12 px-4 md:px-5 text-center md:text-left
                  font-mono text-[13px] md:text-sm transition-colors duration-[250ms] ease-[cubic-bezier(0.645,0.045,0.355,1)]
                  whitespace-nowrap bg-transparent cursor-pointer rounded
                  ${activeTab === index 
                    ? 'text-accent' 
                    : 'text-text-muted hover:text-text-main hover:bg-surface/30'}
                `}
              >
                {job.company}
              </button>
            ))}
          </div>
        </Reveal>

        {/* --- TAB CONTENT --- */}
        <Reveal className="w-full md:w-3/4">
          <div key={activeTab} className="animate-fadeIn">
            
            <h3 className="text-xl md:text-2xl font-bold text-text-bright mb-1">
              {jobs[activeTab].title}{' '}
              <span className="text-accent">
                @ <a href="#" className="inline-link">{jobs[activeTab].company}</a>
              </span>
            </h3>
            
            <p className="font-mono text-[13px] text-text-muted mb-6">
              {jobs[activeTab].range}
            </p>
            
            <ul className="space-y-4 text-text-muted text-base leading-relaxed">
              {jobs[activeTab].details.map((detail, idx) => (
                <li key={idx} className="flex relative pl-6 before:content-['▹'] before:absolute before:left-0 before:text-accent">
                  {detail}
                </li>
              ))}
            </ul>

          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Experience;