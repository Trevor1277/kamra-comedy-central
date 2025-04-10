
import { useTheme } from '@/contexts/ThemeContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutContent from '@/components/AboutContent';
import AnimatedSection from '@/components/AnimatedSection';

const About = () => {
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
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-8 gradient-text">About Kunal</h1>
          </AnimatedSection>
          <AnimatedSection animation="fade-in" delay={300}>
            <AboutContent />
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
