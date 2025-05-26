const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b border-neutral-200 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-mono text-sm font-medium">STUDIO.DIGITAL</div>
          <div className="hidden md:flex space-x-8 text-sm">
            <a
              href="#work"
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Work
            </a>
            <a
              href="#services"
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
