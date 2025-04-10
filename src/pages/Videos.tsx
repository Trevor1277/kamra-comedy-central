
import { useEffect, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import Navbar from '@/components/Navbar';
import VideosGrid from '@/components/VideosGrid';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ContentLoader } from '@/components/ui/loaders/ContentLoader';
import SectionContainer from '@/components/ui/SectionContainer';

const Videos = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
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
          <ContentLoader type="text" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <ContentLoader type="video" count={6} />
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
        <SectionContainer
          title="Videos"
          subtitle="Watch Kunal's most popular stand-up clips, interviews, and podcast episodes. Subscribe to his YouTube channel for regular updates and fresh content."
          className="pt-20"
          maxWidth="6xl"
        >
          <VideosGrid />
        </SectionContainer>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Videos;
