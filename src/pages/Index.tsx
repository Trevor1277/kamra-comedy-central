
import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import ShowsSection from '@/components/ShowsSection';
import VideosSection from '@/components/VideosSection';
import AboutSection from '@/components/AboutSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [language, setLanguage] = useState<'en' | 'hi'>('en');
  const { toast } = useToast();
  
  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
    
    toast({
      title: language === 'en' 
        ? `Switched to ${newTheme ? 'dark' : 'light'} mode` 
        : `${newTheme ? 'डार्क' : 'लाइट'} मोड में बदल गया`,
      duration: 2000,
    });
  };
  
  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'hi' : 'en';
    setLanguage(newLanguage);
    
    toast({
      title: newLanguage === 'en' 
        ? 'Switched to English' 
        : 'हिंदी में बदल गया',
      duration: 2000,
    });
  };

  return (
    <div className={`min-h-screen ${isDarkTheme ? 'dark' : ''}`}>
      <Navbar
        toggleTheme={toggleTheme}
        isDarkTheme={isDarkTheme}
        language={language}
        toggleLanguage={toggleLanguage}
      />
      <main>
        <HeroSection language={language} />
        <ShowsSection language={language} />
        <VideosSection language={language} />
        <AboutSection language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
};

export default Index;
