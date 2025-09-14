import { ArrowRight, Play } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="relative container-width text-center section-padding">
        <div className={`space-y-8 ${isVisible ? 'fade-in animate' : 'fade-in'}`}>
          {/* Main Headline */}
          <h1 className="heading-hero bg-gradient-hero bg-clip-text text-transparent">
            Start Your Online Career Today
          </h1>

          {/* Tagline */}
          <p className="text-lead max-w-3xl mx-auto">
            Transform your skills into a thriving digital career. Get expert guidance, 
            discover top platforms, and join thousands who've successfully transitioned to online work.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button 
              onClick={() => scrollToSection('platforms')}
              className="btn-hero group flex items-center gap-2"
            >
              Explore Opportunities
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <button 
              onClick={() => scrollToSection('about')}
              className="btn-outline group flex items-center gap-2"
            >
              <Play size={18} className="group-hover:scale-110 transition-transform duration-300" />
              Learn More
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span className="text-sm font-medium">1000+ Success Stories</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-sm font-medium">Expert Career Guidance</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm font-medium">Free Resources</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;