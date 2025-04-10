
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturedShows from '@/components/FeaturedShows';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

const Home = () => {
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
      <main>
        <HeroSection />
        <FeaturedShows />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
