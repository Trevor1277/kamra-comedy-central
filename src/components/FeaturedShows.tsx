
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const featuredShows = [
  {
    id: '1',
    title: 'Honest Opinion Tour',
    city: 'Mumbai',
    venue: 'Comedy Club Mumbai',
    date: 'April 24, 2025',
    time: '8:00 PM',
    image: 'https://i.postimg.cc/SxgGrVN6/kunal-kamra-hero.png'
  },
  {
    id: '2',
    title: 'Political Comedy Night',
    city: 'Delhi',
    venue: 'Delhi Laugh Factory',
    date: 'May 10, 2025',
    time: '7:30 PM',
    image: 'https://i.postimg.cc/SxgGrVN6/kunal-kamra-hero.png'
  },
  {
    id: '3',
    title: 'Honest Opinion Tour',
    city: 'Bangalore',
    venue: 'Comedy Central Bangalore',
    date: 'May 17, 2025',
    time: '8:30 PM',
    image: 'https://i.postimg.cc/SxgGrVN6/kunal-kamra-hero.png'
  }
];

const FeaturedShows = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 content-fade-in">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-glow">Featured Shows</h2>
          <p className="text-lg max-w-3xl mx-auto opacity-80">
            Catch Kunal Kamra live on stage with his latest material. Book your tickets before they sell out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 staggered-fade-in">
          {featuredShows.map((show) => (
            <div 
              key={show.id} 
              className="bg-card rounded-xl overflow-hidden shadow-lg border border-border hover-grow card-gradient"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={show.image} 
                  alt={show.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{show.title}</h3>
                <h4 className="text-comedy-orange font-semibold mb-4">{show.city}</h4>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-muted-foreground" />
                    <span>{show.venue}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-muted-foreground" />
                    <span>{show.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={18} className="text-muted-foreground" />
                    <span>{show.time}</span>
                  </div>
                </div>
                
                <Link to={`/booking/${show.id}`}>
                  <Button className="w-full bg-comedy-orange hover:bg-comedy-orange/90 transition-all duration-300 hover:shadow-lg hover:shadow-comedy-orange/20">
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 scale-in" style={{ animationDelay: '0.6s' }}>
          <Link to="/shows">
            <Button 
              variant="outline" 
              size="lg" 
              className="font-semibold transition-all duration-300 hover:bg-comedy-orange/10 hover:border-comedy-orange"
            >
              View All Shows
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedShows;
