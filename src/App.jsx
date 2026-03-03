function App() {
  return (
    <div className="min-h-screen px-6 py-20 lg:px-24">
      <header className="max-w-4xl mx-auto">
        <h1 className="font-mono text-green mb-5 tracking-tight">
          Hi, my name is
        </h1>
        <h2 className="text-5xl md:text-7xl font-bold text-lightest-slate mb-4">
          Ahsan.
        </h2>
        <h3 className="text-4xl md:text-6xl font-bold text-slate leading-tight mb-8">
          I build things for the web.
        </h3>
        <p className="max-w-xl text-lg mb-12">
          I’m a software engineering student and data analyst based in Dhaka. 
          I specialize in building clean, functional, and data-driven digital experiences.
        </p>
        <a 
          href="mailto:your-email@example.com"
          className="inline-block border border-green text-green font-mono px-7 py-4 rounded hover:bg-green/10 transition-all"
        >
          Get In Touch
        </a>
      </header>
    </div>
  )
}

export default App