
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';
import ShowsGrid from '@/components/ShowsGrid';
import Footer from '@/components/Footer';

const Shows = () => {
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
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-8 gradient-text">Upcoming Shows</h1>
          <p className="text-lg mb-10 max-w-3xl">
            Don't miss your chance to experience Kunal Kamra's sharp wit and political satire live on stage. 
            Book your tickets now for an unforgettable evening of comedy and thought-provoking humor.
          </p>
          <ShowsGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shows;
