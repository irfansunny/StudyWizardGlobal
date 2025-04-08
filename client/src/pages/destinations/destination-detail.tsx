import { useParams } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Destination } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, MapPin, GraduationCap, ChevronLeft } from "lucide-react";
import { Link } from "wouter";

// This would typically come from an API, but for now we'll define it here
const destinations: Record<string, Destination> = {
  usa: {
    id: "usa",
    name: "United States",
    description: "The United States offers world-renowned universities with cutting-edge research opportunities and diverse campus cultures. Home to prestigious Ivy League institutions and innovative tech hubs, studying in the USA provides unparalleled academic excellence and career prospects.",
    features: [
      { text: "Home to 8 of the world's top 10 universities" },
      { text: "Optional Practical Training (OPT) allows students to work for up to 3 years after graduation" },
      { text: "Diverse range of programs and specializations" },
      { text: "Flexible education system with numerous scholarship opportunities" },
      { text: "Vibrant campus life and cultural experiences" }
    ],
    image: "/src/assets/usa.jpg"
  },
  canada: {
    id: "canada",
    name: "Canada",
    description: "Canada offers high-quality education at affordable tuition rates compared to other English-speaking countries. With its welcoming immigration policies and post-graduation work permits, Canada has become a top choice for international students seeking excellent education and pathways to permanent residency.",
    features: [
      { text: "Post-Graduation Work Permit for up to 3 years" },
      { text: "Clear pathway to permanent residency through Express Entry" },
      { text: "Affordable tuition compared to other English-speaking countries" },
      { text: "Safe environment with high quality of life" },
      { text: "Bilingual education opportunities (English and French)" }
    ],
    image: "/src/assets/canada.jpg"
  },
  uk: {
    id: "uk",
    name: "United Kingdom",
    description: "The United Kingdom offers prestigious education with shorter program durations, allowing students to enter the workforce sooner. With its rich academic heritage and innovative teaching methodologies, UK universities provide globally recognized qualifications and a multicultural learning environment.",
    features: [
      { text: "Shorter degree programs (3 years for Bachelor's, 1 year for Master's)" },
      { text: "Home to 4 of the world's top 10 universities" },
      { text: "Graduate Immigration Route offering 2-year post-study work visa" },
      { text: "Rich cultural heritage and diverse student population" },
      { text: "Strong industry connections and research opportunities" }
    ],
    image: "/src/assets/uk.jpg"
  },
  australia: {
    id: "australia",
    name: "Australia",
    description: "Australia combines high-quality education with an excellent quality of life and beautiful natural surroundings. Its universities are known for innovative research, practical training, and a supportive environment for international students, with generous post-study work rights.",
    features: [
      { text: "Post-Study Work Visa for up to 4 years" },
      { text: "Strong focus on research and innovation" },
      { text: "Excellent quality of life and climate" },
      { text: "Strong support services for international students" },
      { text: "Work rights during study (up to 20 hours per week)" }
    ],
    image: "/src/assets/australia.jpg"
  },
  europe: {
    id: "europe",
    name: "European Countries",
    description: "European countries offer diverse education systems, often with low or no tuition fees. With the Bologna Process ensuring comparable degree standards across Europe, students benefit from high-quality education, rich cultural experiences, and the opportunity to travel across multiple countries during their studies.",
    features: [
      { text: "Low or no tuition fees in many countries (Germany, Norway, Finland)" },
      { text: "Rich cultural heritage and travel opportunities" },
      { text: "Many English-taught programs available" },
      { text: "Strong research focus and funding" },
      { text: "Work opportunities across the EU for graduates" }
    ],
    image: "/src/assets/europe.jpg"
  }
};

export default function DestinationDetail() {
  const params = useParams<{ id: string }>();
  const destinationId = params.id;
  
  // In a real app, this would be an API call
  // const { data: destination, isLoading, error } = useQuery({
  //   queryKey: ['/api/destinations', destinationId],
  //   queryFn: getQueryFn()
  // });
  
  // For now, just get the destination from our static data
  const destination = destinations[destinationId];

  if (!destination) {
    return (
      <div className="container mx-auto py-16 px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-6">Destination Not Found</h1>
          <p className="mb-8">Sorry, we couldn't find information about this destination.</p>
          <Button asChild>
            <Link href="/">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Return to Home
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-16 px-4">
      <Button variant="outline" asChild className="mb-8">
        <Link href="/">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to All Destinations
        </Link>
      </Button>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent">
            Study in {destination.name}
          </h1>
          
          <p className="text-lg mb-8">{destination.description}</p>
          
          <div className="flex items-center mb-8">
            <MapPin className="h-5 w-5 text-teal-500 mr-2" />
            <span className="text-lg font-medium">Popular Destination</span>
          </div>
          
          <div className="flex items-center mb-8">
            <GraduationCap className="h-5 w-5 text-teal-500 mr-2" />
            <span className="text-lg font-medium">Top-Tier Universities</span>
          </div>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Why Study in {destination.name}?</CardTitle>
              <CardDescription>Key advantages for international students</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {destination.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Button className="w-full md:w-auto bg-teal-600 hover:bg-teal-700" size="lg" asChild>
            <Link href="/auth">Apply for {destination.name} Programs</Link>
          </Button>
        </div>
        
        <div className="relative rounded-lg overflow-hidden shadow-xl h-[500px]">
          <img 
            src={destination.image} 
            alt={`Study in ${destination.name}`} 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
            <h3 className="text-white text-2xl font-bold">Begin Your Journey in {destination.name}</h3>
            <p className="text-white/90">Edge Education will guide you every step of the way</p>
          </div>
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-6">Ready to Start Your Educational Journey?</h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Contact Edge Education today for personalized guidance on applying to 
          universities in {destination.name}. Our expert counselors will help you 
          navigate the entire process from application to arrival.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-teal-600 hover:bg-teal-700" size="lg" asChild>
            <Link href="/auth">Register for Consultation</Link>
          </Button>
          <Button variant="outline" size="lg">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}