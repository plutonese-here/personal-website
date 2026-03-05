import Reveal from './Reveal';

const About = () => {
  return (
    <section id="about" className="max-w-4xl mx-auto py-24">
      
      {/* 1. Title reveals as one block */}
      <Reveal>
        <h2 className="flex items-center text-2xl md:text-3xl font-bold text-text-main mb-10 whitespace-nowrap">
          <span className="font-mono text-accent text-lg md:text-xl font-normal mr-3 mt-1">01.</span>
          About Me
          <div className="h-[1px] bg-[#E89544] opacity-20 w-full flex-grow max-w-[100px] md:max-w-[300px] ml-4 md:ml-6"></div>
        </h2>
      </Reveal>

      <div className="flex flex-col md:flex-row gap-12 md:items-start">
        
        {/* 2. Text Bio cascades so each paragraph flows in one by one */}
        <Reveal cascade className="w-full md:w-3/5 text-text-muted leading-relaxed text-base space-y-4">
          <p>
            Hello! My name is Ahsan. I enjoy creating things that live on the internet and uncovering the stories hidden within complex datasets. My interest in tech started with a curiosity for how digital systems operate, which naturally led me to pursue a degree in Computer Science and Engineering.
          </p>
          <p>
            Fast-forward to today, I balance my coursework with my role as a Data Management Assistant in a corporate environment. My main focus these days is building clean, accessible web applications and utilizing data to drive better user experiences.
          </p>
          <p>
            When I'm not at my keyboard exploring new web frameworks or diving into open-source intelligence (OSINT), I'm usually taking care of my cat, Mishu, or getting completely absorbed in a good psychological film.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
          
          <ul className="grid grid-cols-2 gap-2 mt-4 font-mono text-sm">
            <li className="flex items-center before:content-['▹'] before:text-accent before:mr-2">JavaScript (ES6+)</li>
            <li className="flex items-center before:content-['▹'] before:text-accent before:mr-2">React</li>
            <li className="flex items-center before:content-['▹'] before:text-accent before:mr-2">Tailwind CSS</li>
            <li className="flex items-center before:content-['▹'] before:text-accent before:mr-2">Data Analytics</li>
            <li className="flex items-center before:content-['▹'] before:text-accent before:mr-2">Python</li>
            <li className="flex items-center before:content-['▹'] before:text-accent before:mr-2">SQL</li>
          </ul>
        </Reveal>

        {/* 3. Image reveals as one block */}
        <Reveal className="w-full md:w-2/5 flex justify-center mt-10 md:mt-0">
          <div className="relative group max-w-[300px] w-full aspect-square">
            <div className="absolute inset-0 bg-accent rounded z-20 mix-blend-multiply opacity-50 transition-all duration-300 group-hover:opacity-0 group-active:opacity-0 cursor-pointer"></div>
            
            <img 
              src="src/assets/me.jpg" 
              alt="Ahsan" 
              className="rounded relative z-10 object-cover w-full h-full transition-all duration-300 filter grayscale contrast-125 group-hover:filter-none group-active:filter-none cursor-pointer group-hover:-translate-y-1 group-hover:-translate-x-1 group-active:-translate-y-1 group-active:-translate-x-1"
            />
            
            <div className="absolute inset-0 border-2 border-accent rounded translate-x-5 translate-y-5 -z-10 transition-all duration-300 group-hover:translate-x-3 group-hover:translate-y-3 group-active:translate-x-3 group-active:translate-y-3"></div>
          </div>
        </Reveal>
        
      </div>
    </section>
  );
};

export default About;