
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';
import VideosGrid from '@/components/VideosGrid';
import Footer from '@/components/Footer';

const Videos = () => {
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
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-8 gradient-text">Videos</h1>
          <p className="text-lg mb-10 max-w-3xl">
            Watch Kunal's most popular stand-up clips, interviews, and podcast episodes. Subscribe to his YouTube 
            channel for regular updates and fresh content.
          </p>
          <VideosGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Videos;
