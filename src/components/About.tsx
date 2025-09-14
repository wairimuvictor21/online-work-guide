import { Target, Users, Award, TrendingUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const About = () => {
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

  const features = [
    {
      icon: Target,
      title: "Personalized Guidance",
      description: "Get tailored advice based on your skills, experience, and career goals."
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join a thriving community of freelancers and remote workers sharing their journey."
    },
    {
      icon: Award,
      title: "Proven Strategies",
      description: "Learn from tested methods that have helped thousands build successful online careers."
    },
    {
      icon: TrendingUp,
      title: "Market Insights",
      description: "Stay updated with the latest trends and opportunities in the digital economy."
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="section-padding bg-muted/30">
      <div className="container-width">
        <div className={`text-center mb-16 ${isVisible ? 'fade-in animate' : 'fade-in'}`}>
          <h2 className="heading-section">About Digital Career Coach</h2>
          <p className="text-lead max-w-3xl mx-auto">
            We're dedicated to helping people transition from traditional employment to thriving online careers. 
            Our mission is to provide the tools, knowledge, and support you need to succeed in the digital economy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className={`card-feature text-center ${
                isVisible ? 'fade-in animate' : 'fade-in'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon size={28} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className={`mt-16 text-center ${isVisible ? 'slide-in-left animate' : 'slide-in-left'}`}>
          <div className="bg-gradient-hero p-8 rounded-2xl text-primary-foreground max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg leading-relaxed opacity-90">
              "To empower individuals worldwide with the knowledge, tools, and confidence needed to build 
              sustainable and fulfilling online careers. We believe everyone deserves the freedom to work 
              on their own terms and achieve financial independence through digital opportunities."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;