
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background design elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 -left-44 w-96 h-96 bg-comedy-purple opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-44 w-96 h-96 bg-comedy-orange opacity-20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-3/4 left-1/2 w-72 h-72 bg-comedy-blue opacity-10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 content-fade-in">
            <div className="inline-block bg-comedy-orange/10 text-comedy-orange px-4 py-1 rounded-full text-sm font-bold mb-6 animate-pulse">
              UPCOMING TOUR
            </div>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6">
              <span className="gradient-text text-glow">Kunal Kamra</span>
              <br />
              <span className="text-3xl md:text-5xl">Live in Concert</span>
            </h1>
            
            <p className="text-xl mb-8 opacity-90 max-w-2xl">
              Experience India's sharpest political satirist & comedian live on stage. 
              New material, unfiltered opinions, and non-stop laughter guaranteed!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-10 staggered-fade-in">
              <div className="flex flex-col">
                <span className="font-heading text-comedy-orange font-bold">
                  NEXT SHOW
                </span>
                <span className="text-2xl font-bold">
                  Mumbai - 24 APR
                </span>
              </div>
              
              <Link to="/shows">
                <Button 
                  size="lg" 
                  className="bg-comedy-orange hover:bg-comedy-orange/90 btn-bounce font-bold text-white flex items-center gap-2 hover:shadow-lg hover:shadow-comedy-orange/30 transition-all duration-300"
                >
                  Book Tickets
                  <ArrowRight size={18} />
                </Button>
              </Link>
            </div>

            <div className="flex items-center scale-in" style={{ animationDelay: '0.8s' }}>
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-comedy-purple flex items-center justify-center text-white">K</div>
                <div className="w-10 h-10 rounded-full bg-comedy-pink flex items-center justify-center text-white">S</div>
                <div className="w-10 h-10 rounded-full bg-comedy-blue flex items-center justify-center text-white">R</div>
              </div>
              <div className="ml-4 text-sm opacity-90">
                <span className="font-bold">1M+</span> tickets sold
              </div>
            </div>
            
            <div className="mt-8 p-4 rounded-lg border border-comedy-orange/20 bg-comedy-orange/5 max-w-md scale-in" style={{ animationDelay: '1s' }}>
              <p className="italic text-comedy-orange">"Politics is not rocket science, it's way more complicated."</p>
              <p className="text-right text-sm mt-2">— Kunal Kamra</p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-comedy-orange opacity-25 rounded-full blur-3xl -z-10 pulse-animate"></div>
            <div className="relative z-10 aspect-[3/4] max-w-md mx-auto floating">
              <img 
                src="https://i.postimg.cc/SxgGrVN6/kunal-kamra-hero.png" 
                alt="Kunal Kamra" 
                className="w-full h-full object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-5 -right-5 bg-comedy-orange text-white p-4 rounded-lg shadow-lg font-heading animate-bounce-subtle">
                <p className="text-sm font-normal">
                  NEW TOUR
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
