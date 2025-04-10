
import { useTheme } from '@/contexts/ThemeContext';
import Navbar from '@/components/Navbar';
import VideosGrid from '@/components/VideosGrid';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';

const Videos = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen ${isDarkTheme ? 'dark' : ''} transition-colors duration-300`}>
      <Navbar
        toggleTheme={toggleTheme}
        isDarkTheme={isDarkTheme}
      />
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="slide-up">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-8 gradient-text">Videos</h1>
            <p className="text-lg mb-10 max-w-3xl">
              Watch Kunal's most popular stand-up clips, interviews, and podcast episodes. Subscribe to his YouTube 
              channel for regular updates and fresh content.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="fade-in" delay={300}>
            <VideosGrid />
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Videos;
