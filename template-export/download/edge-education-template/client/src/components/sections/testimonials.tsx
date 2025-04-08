import { Card, CardContent } from "@/components/ui/card";
import { Star, StarHalf } from "lucide-react";
import { Testimonial } from "@/lib/types";

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "GlobalEduConnect made my dream of studying at a top US university come true. Their counselors guided me through every step of the process, from selecting the right program to preparing for my visa interview. I'm now pursuing my Master's degree at UCLA!",
      name: "Rahul Joshi",
      position: "UCLA, Master's in Computer Science",
      rating: 5
    },
    {
      id: 2,
      quote: "I was nervous about applying to universities in the UK, but the team at GlobalEduConnect made everything straightforward. They helped me secure a partial scholarship, which made my education affordable. Their visa guidance was invaluable!",
      name: "Maria Alves",
      position: "University of Manchester, Finance",
      rating: 5
    },
    {
      id: 3,
      quote: "The scholarship guidance provided by GlobalEduConnect was exceptional. They helped me apply to multiple Canadian universities and I received offers from all of them! Now I'm studying at University of Toronto with a significant scholarship.",
      name: "Li Zhang",
      position: "University of Toronto, Engineering",
      rating: 4.5
    }
  ];

  // Helper function to render star ratings
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="fill-amber-400 text-amber-400" />);
    }
    
    // Half star if needed
    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="fill-amber-400 text-amber-400" />);
    }
    
    return stars;
  };

  // Create initials from name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('');
  };

  return (
    <section id="testimonials" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Success Stories
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-slate-600 mx-auto">
            Hear from students who achieved their international education dreams with our help.
          </p>
        </div>

        <div className="mt-12 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="overflow-hidden shadow border border-slate-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-amber-400 flex">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                <p className="text-slate-600 italic mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center">
                    <span className="text-slate-700 font-medium">{getInitials(testimonial.name)}</span>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-slate-900">{testimonial.name}</h4>
                    <p className="text-sm text-slate-500">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
