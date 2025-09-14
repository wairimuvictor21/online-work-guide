import { BookOpen, Video, FileText, Download } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const LearningResources = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const resources = [
    {
      icon: BookOpen,
      title: "Complete Freelancing Guide",
      description: "Everything you need to know about starting your freelance career, from setting rates to finding clients.",
      type: "Guide",
      duration: "30 min read",
      color: "bg-gradient-primary"
    },
    {
      icon: Video,
      title: "Platform Mastery Course",
      description: "Video tutorials on how to optimize your profiles on top freelancing platforms for maximum visibility.",
      type: "Video Course",
      duration: "2 hours",
      color: "bg-gradient-secondary"
    },
    {
      icon: FileText,
      title: "Portfolio Templates",
      description: "Professional templates and examples to help you create an impressive portfolio that wins clients.",
      type: "Templates",
      duration: "Download",
      color: "bg-gradient-accent"
    },
    {
      icon: Download,
      title: "Client Communication Kit",
      description: "Scripts, templates, and best practices for professional client communication and project management.",
      type: "Toolkit",
      duration: "Instant access",
      color: "bg-gradient-primary"
    }
  ];

  const categories = [
    { name: "Getting Started", count: 12 },
    { name: "Building Your Brand", count: 8 },
    { name: "Client Relations", count: 15 },
    { name: "Growing Your Business", count: 10 },
    { name: "Tools & Software", count: 6 }
  ];

  return (
    <section ref={sectionRef} id="resources" className="section-padding">
      <div className="container-width">
        <div className={`text-center mb-16 ${isVisible ? 'fade-in animate' : 'fade-in'}`}>
          <h2 className="heading-section">Learning Resources</h2>
          <p className="text-lead max-w-3xl mx-auto">
            Access our comprehensive library of guides, tutorials, and tools designed to accelerate your online career journey.
          </p>
        </div>

        {/* Featured Resources */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {resources.map((resource, index) => (
            <div
              key={resource.title}
              className={`card-modern p-6 group cursor-pointer ${
                isVisible ? 'fade-in animate' : 'fade-in'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 ${resource.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <resource.icon size={24} className="text-white" />
              </div>
              
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                  {resource.type}
                </span>
                <span className="text-xs text-muted-foreground">{resource.duration}</span>
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {resource.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {resource.description}
              </p>
              
              <div className="mt-4 flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all duration-300">
                Access Resource
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Resource Categories */}
        <div className={`bg-card-accent rounded-xl p-8 ${isVisible ? 'slide-in-right animate' : 'slide-in-right'}`}>
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Browse by Category</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {categories.map((category, index) => (
              <div
                key={category.name}
                className="bg-card border border-border rounded-lg p-4 hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 cursor-pointer group"
              >
                <div className="text-center">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {category.name}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    {category.count} resources
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-12 ${isVisible ? 'fade-in animate' : 'fade-in'}`} style={{ animationDelay: '0.6s' }}>
          <button className="btn-secondary">
            View All Resources
          </button>
        </div>
      </div>
    </section>
  );
};

export default LearningResources;