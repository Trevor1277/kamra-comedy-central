
import { useEffect, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturedShows from '@/components/FeaturedShows';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ContentLoader } from '@/components/ui/loaders/ContentLoader';

const Home = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Page transition variants
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  };

  if (isLoading) {
    return (
      <div className={`min-h-screen ${isDarkTheme ? 'dark' : ''} transition-colors duration-300 bg-background`}>
        <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <div className="container mx-auto px-4 pt-32 pb-16">
          <div className="flex flex-col gap-12">
            <ContentLoader type="image" />
            <ContentLoader type="text" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ContentLoader type="card" count={3} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      className={`min-h-screen ${isDarkTheme ? 'dark' : ''} transition-colors duration-300 bg-background`}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <main>
        <HeroSection />
        <FeaturedShows />
        <TestimonialsSection />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Home;
