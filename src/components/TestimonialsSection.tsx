
import { QuoteIcon } from 'lucide-react';

const testimonials = [
  {
    name: "Rohit Sharma",
    comment: "Kunal's show was absolutely hilarious! His political satire is both thought-provoking and entertaining.",
    location: "Mumbai"
  },
  {
    name: "Priya Desai",
    comment: "I've never laughed so hard in my life. Kunal's observations about Indian politics are spot on and delivered with perfect comedic timing.",
    location: "Delhi"
  },
  {
    name: "Arjun Mehta",
    comment: "Sharp wit, fearless commentary, and belly laughs throughout the show. Definitely worth every penny!",
    location: "Bangalore"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">What Fans Are Saying</h2>
          <p className="text-lg max-w-3xl mx-auto opacity-80">
            Don't just take our word for it. Here's what audiences have to say about Kunal's live shows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-background rounded-xl p-6 shadow-md border border-border"
            >
              <QuoteIcon size={32} className="text-comedy-orange mb-4" />
              <p className="italic mb-6">{testimonial.comment}</p>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-comedy-orange/10 rounded-xl border border-comedy-orange/20 max-w-4xl mx-auto">
          <p className="text-xl font-medium italic text-center">
            "I believe comedy is a powerful tool to discuss important issues in society. 
            If you can make someone laugh while making them think, you've won half the battle."
          </p>
          <p className="text-right mt-4 font-semibold">— Kunal Kamra</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
