import { Facebook, Instagram, Linkedin, Youtube, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com',
      color: 'hover:text-pink-600'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com',
      color: 'hover:text-blue-700'
    },
    {
      name: 'TikTok',
      icon: MessageCircle, // Using MessageCircle as TikTok isn't in lucide
      url: 'https://tiktok.com',
      color: 'hover:text-red-500'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com',
      color: 'hover:text-red-600'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Resources', href: '#resources' },
    { name: 'Platforms', href: '#platforms' },
    { name: 'Contact', href: '#contact' }
  ];

  const resources = [
    { name: 'Getting Started Guide', href: '#' },
    { name: 'Platform Reviews', href: '#' },
    { name: 'Success Stories', href: '#' },
    { name: 'Free Templates', href: '#' },
    { name: 'Community Forum', href: '#' }
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-foreground to-foreground/90 text-background">
      <div className="container-width">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Digital Career Coach</h3>
            <p className="text-background/80 leading-relaxed mb-6">
              Empowering individuals worldwide to build successful online careers through expert guidance, 
              proven strategies, and comprehensive resources.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-background/10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-background/20 hover:-translate-y-1 ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href.substring(1))}
                    className="text-background/80 hover:text-background hover:translate-x-1 transition-all duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a
                    href={resource.href}
                    className="text-background/80 hover:text-background hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Stay Updated</h4>
            <p className="text-background/80 mb-4 text-sm">
              Get the latest tips, platform updates, and success stories delivered to your inbox.
            </p>
            
            <div className="space-y-3">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-background/10 border border-background/20 rounded-lg text-background placeholder-background/60 focus:bg-background/20 focus:border-background/40 transition-all duration-300"
                />
                <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary-light transition-colors duration-300 font-medium">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-background/60">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-background/80 text-sm">
              © {currentYear} Digital Career Coach. All rights reserved.
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm text-background/80">
              <a href="#" className="hover:text-background transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-background transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-background transition-colors duration-300">
                Cookie Policy
              </a>
              <a href="#" className="hover:text-background transition-colors duration-300">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Back to Top Button */}
      <button
        onClick={() => scrollToSection('home')}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-large hover:bg-primary-light transition-all duration-300 hover:-translate-y-1 z-40"
        aria-label="Back to top"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;