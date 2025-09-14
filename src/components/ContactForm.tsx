import { useState, useEffect, useRef } from 'react';
import { Send, MessageCircle, Mail, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    serviceType: 'general'
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        serviceType: 'general'
      });
    }, 1500);
  };

  const serviceTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'coaching', label: 'Personal Coaching' },
    { value: 'platform', label: 'Platform Guidance' },
    { value: 'resources', label: 'Learning Resources' },
    { value: 'business', label: 'Business Consultation' }
  ];

  return (
    <section ref={sectionRef} id="contact" className="section-padding">
      <div className="container-width">
        <div className={`text-center mb-16 ${isVisible ? 'fade-in animate' : 'fade-in'}`}>
          <h2 className="heading-section">Get In Touch</h2>
          <p className="text-lead max-w-3xl mx-auto">
            Have questions about starting your online career? Need personalized coaching? 
            We're here to help you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className={`space-y-8 ${isVisible ? 'slide-in-left animate' : 'slide-in-left'}`}>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Let's Start Your Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you're completely new to online work or looking to scale your existing freelance business, 
                our team of experts is ready to provide personalized guidance tailored to your unique situation.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Free Consultation</h4>
                  <p className="text-muted-foreground text-sm">
                    Get a free 30-minute consultation to discuss your career goals and create a personalized roadmap.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <User size={20} className="text-secondary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Expert Guidance</h4>
                  <p className="text-muted-foreground text-sm">
                    Work with experienced professionals who have built successful online careers across various industries.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Ongoing Support</h4>
                  <p className="text-muted-foreground text-sm">
                    Join our community and get continued support as you build and grow your online career.
                  </p>
                </div>
              </div>
            </div>

            {/* Success Stats */}
            <div className="bg-card-accent rounded-xl p-6 border border-border">
              <h4 className="font-semibold text-foreground mb-4">Our Success Record</h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">1000+</div>
                  <div className="text-xs text-muted-foreground">Clients Helped</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">95%</div>
                  <div className="text-xs text-muted-foreground">Success Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">$2M+</div>
                  <div className="text-xs text-muted-foreground">Client Earnings</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${isVisible ? 'slide-in-right animate' : 'slide-in-right'}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="card-modern p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">Send Us a Message</h3>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-input-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-input-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-medium text-foreground mb-2">
                      How can we help you?
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-input-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300"
                    >
                      {serviceTypes.map(type => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-input-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300"
                      placeholder="Brief subject of your message"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-input-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your goals, experience, or any questions you have..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-hero disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;