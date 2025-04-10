
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon, Menu, X, Instagram, Twitter, Youtube } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface NavbarProps {
  toggleTheme: () => void;
  isDarkTheme: boolean;
  language: string;
  toggleLanguage: () => void;
}

const Navbar = ({ toggleTheme, isDarkTheme, language, toggleLanguage }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: language === 'en' ? 'Home' : 'होम', href: '#hero' },
    { name: language === 'en' ? 'Shows' : 'शो', href: '#shows' },
    { name: language === 'en' ? 'Videos' : 'वीडियो', href: '#videos' },
    { name: language === 'en' ? 'About' : 'परिचय', href: '#about' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-background/90 backdrop-blur-md shadow-md' : 'py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <span className="font-heading text-2xl font-bold gradient-text">
            Kunal Kamra
          </span>
        </a>

        {isMobile ? (
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme} 
              className="text-foreground"
            >
              {isDarkTheme ? <SunIcon /> : <MoonIcon />}
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleLanguage} 
              className="font-bold"
            >
              {language === 'en' ? 'हिं' : 'EN'}
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu} 
              className="text-foreground"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        ) : (
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  className="font-medium hover:text-comedy-orange transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="hidden md:flex items-center gap-1">
              <a href="https://www.instagram.com/kuna_kamra" target="_blank" rel="noreferrer" className="p-2 hover:text-comedy-orange transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com/kunalkamra88" target="_blank" rel="noreferrer" className="p-2 hover:text-comedy-orange transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.youtube.com/@KunalKamra" target="_blank" rel="noreferrer" className="p-2 hover:text-comedy-orange transition-colors">
                <Youtube size={20} />
              </a>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleLanguage} 
              className="font-bold"
            >
              {language === 'en' ? 'हिं' : 'EN'}
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme} 
              className="text-foreground"
            >
              {isDarkTheme ? <SunIcon /> : <MoonIcon />}
            </Button>
            <Button className="bg-comedy-orange hover:bg-comedy-orange/90">
              {language === 'en' ? 'Book Tickets' : 'टिकट बुक करें'}
            </Button>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className="fixed inset-0 top-16 bg-background/95 backdrop-blur-md z-40 p-5 animate-slide-up">
          <div className="flex flex-col space-y-6 items-center pt-10">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={toggleMenu}
                className="text-2xl font-medium hover:text-comedy-orange transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-6 mt-6">
              <a href="https://www.instagram.com/kuna_kamra" target="_blank" rel="noreferrer" className="p-2 hover:text-comedy-orange transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://twitter.com/kunalkamra88" target="_blank" rel="noreferrer" className="p-2 hover:text-comedy-orange transition-colors">
                <Twitter size={24} />
              </a>
              <a href="https://www.youtube.com/@KunalKamra" target="_blank" rel="noreferrer" className="p-2 hover:text-comedy-orange transition-colors">
                <Youtube size={24} />
              </a>
            </div>
            <Button className="bg-comedy-orange hover:bg-comedy-orange/90 w-full mt-8">
              {language === 'en' ? 'Book Tickets' : 'टिकट बुक करें'}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
