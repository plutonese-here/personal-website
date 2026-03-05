import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import SocialBars from './components/SocialBars';

function App() {
  return (
    <div className="px-6 lg:px-24">
      <SocialBars />
      <Hero />
      <About />
      <Experience /> {/* Dropped in right here! */}
    </div>
  );
}

export default App;