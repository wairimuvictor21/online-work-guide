import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import LearningResources from '@/components/LearningResources';
import TopPlatforms from '@/components/TopPlatforms';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <LearningResources />
        <TopPlatforms />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
