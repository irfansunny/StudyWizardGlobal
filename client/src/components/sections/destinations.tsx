import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "wouter";
import { Destination } from "@/lib/types";

const Destinations = () => {
  const destinations: Destination[] = [
    {
      id: "usa",
      name: "United States",
      description: "Home to some of the world's most prestigious universities, the USA offers diverse programs, cutting-edge research opportunities, and a multicultural living experience.",
      features: [
        { text: "World-ranked universities" },
        { text: "Flexible education system" },
        { text: "Optional Practical Training (OPT)" },
        { text: "Diverse cultural experience" }
      ],
      image: "https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: "canada",
      name: "Canada",
      description: "Known for its high-quality education, affordable tuition, and welcoming immigration policies, Canada is increasingly popular among international students.",
      features: [
        { text: "Post-Graduation Work Permit" },
        { text: "Pathway to permanent residency" },
        { text: "Safe environment" },
        { text: "Excellent healthcare system" }
      ],
      image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1111&q=80"
    },
    {
      id: "uk",
      name: "United Kingdom",
      description: "With centuries-old universities and modern research facilities, the UK offers quality education with shorter program durations compared to many countries.",
      features: [
        { text: "Prestigious educational heritage" },
        { text: "Graduate Immigration Route" },
        { text: "Shorter degree programs" },
        { text: "Rich cultural experience" }
      ],
      image: "https://images.unsplash.com/photo-1526659666037-96f63c2ec0b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: "australia",
      name: "Australia",
      description: "World-class education, amazing lifestyle, and post-study work opportunities make Australia an attractive destination for international students.",
      features: [
        { text: "Post-study work visa options" },
        { text: "High quality of life" },
        { text: "Vibrant multicultural cities" },
        { text: "Strong research opportunities" }
      ],
      image: ""
    },
    {
      id: "europe",
      name: "Europe",
      description: "From Germany's tuition-free universities to innovative programs in the Netherlands and Scandinavia, Europe offers diverse educational opportunities.",
      features: [
        { text: "Affordable or free tuition in many countries" },
        { text: "Rich cultural experiences" },
        { text: "Strong international networks" },
        { text: "Diverse program offerings" }
      ],
      image: ""
    }
  ];

  return (
    <section id="destinations" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Study Destinations
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-slate-600 mx-auto">
            Explore top education destinations trusted by thousands of international students.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {/* Featured destinations (USA, Canada, UK) */}
          {destinations.slice(0, 3).map((destination, index) => (
            <div 
              id={destination.id} 
              key={destination.id} 
              className="lg:grid lg:grid-cols-12 lg:gap-8 items-center"
            >
              {/* Text content - alternate left/right */}
              <div className={`lg:col-span-5 ${index === 1 ? 'order-2 lg:order-2' : ''}`}>
                <h3 className="text-2xl font-bold text-slate-900">{destination.name}</h3>
                <p className="mt-3 text-lg text-slate-600">
                  {destination.description}
                </p>
                <div className="mt-5 space-y-2">
                  {destination.features.map((feature, idx) => (
                    <p key={idx} className="flex items-center text-slate-700">
                      <span className="flex-shrink-0 text-primary mr-2">
                        <Check className="h-5 w-5" />
                      </span> 
                      {feature.text}
                    </p>
                  ))}
                </div>
                <Button asChild className="mt-6">
                  <Link href="#contact">
                    <a>Explore {destination.name} Options</a>
                  </Link>
                </Button>
              </div>

              {/* Image - alternate right/left */}
              <div className={`mt-8 lg:mt-0 lg:col-span-7 ${index === 1 ? 'order-1 lg:order-1' : ''}`}>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src={destination.image} 
                    alt={`${destination.name} Campus`} 
                    className="w-full h-72 object-cover" 
                  />
                </div>
              </div>
            </div>
          ))}

          {/* Summary destinations (Australia, Europe) */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {destinations.slice(3).map((destination) => (
              <Card 
                key={destination.id} 
                id={destination.id} 
                className="bg-white overflow-hidden shadow"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900">{destination.name}</h3>
                  <p className="mt-2 text-slate-600">
                    {destination.description}
                  </p>
                  <Link href="#contact">
                    <a className="mt-4 inline-flex items-center text-primary hover:text-primary-600">
                      Learn more <span className="ml-1">→</span>
                    </a>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
