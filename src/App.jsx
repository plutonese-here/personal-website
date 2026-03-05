import Hero from './components/Hero';
import About from './components/About';
import SocialBars from './components/SocialBars';

function App() {
  return (
    <div className="px-6 lg:px-24">
      {/* These will sit fixed on the sides of the screen forever */}
      <SocialBars />
      
      {/* The scrolling sections of your site */}
      <Hero />
      <About />
    </div>
  );
}

export default App;