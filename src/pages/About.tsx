
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutContent from '@/components/AboutContent';

const About = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const { toast } = useToast();
  
  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
    
    toast({
      title: `Switched to ${newTheme ? 'dark' : 'light'} mode`,
      duration: 2000,
    });
  };

  return (
    <div className={`min-h-screen ${isDarkTheme ? 'dark' : ''}`}>
      <Navbar
        toggleTheme={toggleTheme}
        isDarkTheme={isDarkTheme}
      />
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-8 gradient-text">About Kunal</h1>
          <AboutContent />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
