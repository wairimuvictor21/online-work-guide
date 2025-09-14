import { ExternalLink, Star, Users, DollarSign } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const TopPlatforms = () => {
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

  const platforms = [
    {
      name: "Upwork",
      description: "World's largest freelancing platform with diverse project opportunities",
      url: "https://upwork.com",
      category: "General Freelancing",
      rating: 4.5,
      users: "18M+",
      avgEarning: "$15-100/hr",
      featured: true
    },
    {
      name: "Fiverr",
      description: "Marketplace for creative and digital services starting from $5",
      url: "https://fiverr.com",
      category: "Creative Services",
      rating: 4.4,
      users: "4M+",
      avgEarning: "$5-500/project",
      featured: true
    },
    {
      name: "Freelancer",
      description: "Global crowdsourcing marketplace for various skills and services",
      url: "https://freelancer.com",
      category: "General Freelancing",
      rating: 4.2,
      users: "50M+",
      avgEarning: "$10-80/hr",
      featured: true
    },
    {
      name: "Toptal",
      description: "Exclusive network of top 3% of freelance talent in technology",
      url: "https://toptal.com",
      category: "Tech & Development",
      rating: 4.8,
      users: "1M+",
      avgEarning: "$60-200/hr",
      featured: true
    },
    {
      name: "Amazon Mechanical Turk",
      description: "Crowdsourcing marketplace for simple data entry and micro-tasks",
      url: "https://mturk.com",
      category: "Micro Tasks",
      rating: 3.8,
      users: "500K+",
      avgEarning: "$1-20/task",
      featured: false
    },
    {
      name: "Remotasks",
      description: "Platform for AI training tasks and data annotation work",
      url: "https://remotasks.com",
      category: "AI Training",
      rating: 4.0,
      users: "2M+",
      avgEarning: "$2-25/hr",
      featured: false
    },
    {
      name: "Microworkers",
      description: "Small task marketplace for quick online jobs and surveys",
      url: "https://microworkers.com",
      category: "Micro Tasks",
      rating: 3.9,
      users: "1.5M+",
      avgEarning: "$0.10-50/task",
      featured: false
    },
    {
      name: "99designs",
      description: "Design contest platform and one-to-one design projects",
      url: "https://99designs.com",
      category: "Design",
      rating: 4.3,
      users: "1M+",
      avgEarning: "$200-5000/project",
      featured: false
    }
  ];

  const featuredPlatforms = platforms.filter(p => p.featured);
  const otherPlatforms = platforms.filter(p => !p.featured);

  return (
    <section ref={sectionRef} id="platforms" className="section-padding bg-muted/30">
      <div className="container-width">
        <div className={`text-center mb-16 ${isVisible ? 'fade-in animate' : 'fade-in'}`}>
          <h2 className="heading-section">Top Online Work Platforms</h2>
          <p className="text-lead max-w-3xl mx-auto">
            Discover the best platforms to launch your online career. From general freelancing to specialized micro-tasks, 
            find the perfect fit for your skills and goals.
          </p>
        </div>

        {/* Featured Platforms */}
        <div className="mb-16">
          <h3 className={`text-2xl font-bold text-foreground mb-8 text-center ${isVisible ? 'slide-in-left animate' : 'slide-in-left'}`}>
            Featured Platforms
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPlatforms.map((platform, index) => (
              <div
                key={platform.name}
                className={`platform-card ${isVisible ? 'fade-in animate' : 'fade-in'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {platform.name}
                    </h3>
                    <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
                    {platform.category}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {platform.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1">
                      <Star size={12} className="text-yellow-500 fill-current" />
                      <span className="font-medium">{platform.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Users size={12} />
                      <span>{platform.users}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-secondary">
                    <DollarSign size={12} />
                    <span className="font-medium">{platform.avgEarning}</span>
                  </div>
                </div>

                <button className="w-full btn-outline text-sm py-2 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  Visit Platform
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Other Platforms */}
        <div>
          <h3 className={`text-2xl font-bold text-foreground mb-8 text-center ${isVisible ? 'slide-in-right animate' : 'slide-in-right'}`}>
            More Opportunities
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherPlatforms.map((platform, index) => (
              <div
                key={platform.name}
                className={`bg-card border border-border rounded-lg p-4 hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 group cursor-pointer ${
                  isVisible ? 'fade-in animate' : 'fade-in'
                }`}
                style={{ animationDelay: `${(index + 4) * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {platform.name}
                  </h4>
                  <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
                <p className="text-xs text-muted-foreground mb-2">
                  {platform.category}
                </p>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1">
                    <Star size={10} className="text-yellow-500 fill-current" />
                    <span>{platform.rating}</span>
                  </div>
                  <span className="text-secondary font-medium">{platform.avgEarning}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-12 ${isVisible ? 'fade-in animate' : 'fade-in'}`} style={{ animationDelay: '0.8s' }}>
          <div className="bg-gradient-hero p-8 rounded-2xl text-primary-foreground max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-3">Ready to Get Started?</h3>
            <p className="mb-6 opacity-90">
              Join our coaching program and get personalized guidance on choosing the right platform for your skills.
            </p>
            <button className="bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:bg-white/90 transition-colors duration-300">
              Get Personal Coaching
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopPlatforms;
