
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  language: string;
}

const HeroSection = ({ language }: HeroSectionProps) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      {/* Background design elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 -left-44 w-96 h-96 bg-comedy-purple opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-44 w-96 h-96 bg-comedy-orange opacity-20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 gradient-text">
              {language === 'en' ? (
                <>Kunal Kamra<br />Live in Concert</>
              ) : (
                <>कुणाल कामरा<br />लाइव इन कॉन्सर्ट</>
              )}
            </h1>
            
            <p className="text-xl mb-6 opacity-90">
              {language === 'en' 
                ? "Experience India's sharpest political satirist & comedian live on stage. New material, unfiltered opinions, and non-stop laughter guaranteed!"
                : "भारत के सबसे तेज़ राजनीतिक व्यंगकार और कॉमेडियन को लाइव स्टेज पर देखें। नया मटेरियल, बिना फ़िल्टर की राय, और नॉन-स्टॉप हंसी गारंटीड!"}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col">
                <span className="font-heading text-comedy-orange font-bold">
                  {language === 'en' ? 'NEXT SHOW' : 'अगला शो'}
                </span>
                <span className="text-2xl font-bold">
                  Mumbai - 24 APR
                </span>
              </div>
              
              <Button 
                size="lg" 
                className="bg-comedy-orange hover:bg-comedy-orange/90 btn-bounce font-bold text-white flex items-center gap-2"
                onClick={() => document.getElementById('shows')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {language === 'en' ? 'Book Tickets' : 'टिकट बुक करें'}
                <ArrowRight size={18} />
              </Button>
            </div>

            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-comedy-purple flex items-center justify-center text-white">K</div>
                <div className="w-10 h-10 rounded-full bg-comedy-pink flex items-center justify-center text-white">S</div>
                <div className="w-10 h-10 rounded-full bg-comedy-blue flex items-center justify-center text-white">R</div>
              </div>
              <div className="ml-4 text-sm opacity-90">
                <span className="font-bold">1M+</span> {language === 'en' ? 'tickets sold' : 'टिकट बिके'}
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10 aspect-[3/4] max-w-md mx-auto">
              <img 
                src="https://i.postimg.cc/SxgGrVN6/kunal-kamra-hero.png" 
                alt="Kunal Kamra" 
                className="w-full h-full object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-5 -right-5 bg-comedy-orange text-white p-4 rounded-lg shadow-lg font-heading animate-bounce-subtle">
                <p className="text-sm font-normal">
                  {language === 'en' ? 'NEW TOUR' : 'नया टूर'}
                </p>
                <p className="text-lg font-bold">
                  HONEST OPINION
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
