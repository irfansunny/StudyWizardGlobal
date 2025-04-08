import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileCheck, Compass, GraduationCap, Award, Plane, FileText } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    id: 1,
    icon: <Compass className="h-12 w-12 text-teal-500" />,
    title: "Education Counseling",
    description: "Get personalized guidance on selecting the right country, university, and program based on your academic profile, career goals, and budget.",
    features: ["University selection", "Course selection", "Career guidance", "Budget planning"]
  },
  {
    id: 2,
    icon: <FileCheck className="h-12 w-12 text-teal-500" />,
    title: "Admission Assistance",
    description: "Receive comprehensive support with university applications, including document preparation, application submission, and communication with institutions.",
    features: ["Application preparation", "Document review", "University communication", "Offer acceptance guidance"]
  },
  {
    id: 3,
    icon: <Award className="h-12 w-12 text-teal-500" />,
    title: "Scholarship Guidance",
    description: "Explore scholarship opportunities and receive assistance with scholarship applications to help fund your education abroad.",
    features: ["Scholarship research", "Application preparation", "Financial aid advice", "Funding strategies"]
  },
  {
    id: 4,
    icon: <Plane className="h-12 w-12 text-teal-500" />,
    title: "Visa Processing",
    description: "Navigate the complex visa application process with expert guidance on documentation, interview preparation, and visa submission.",
    features: ["Document preparation", "Visa application review", "Interview preparation", "Compliance guidance"]
  },
  {
    id: 5,
    icon: <FileText className="h-12 w-12 text-teal-500" />,
    title: "Documentation Support",
    description: "Receive assistance with preparing and organizing all necessary documents for university applications and visa processing.",
    features: ["Document checklists", "Verification services", "Translation assistance", "Document organization"]
  },
  {
    id: 6,
    icon: <GraduationCap className="h-12 w-12 text-teal-500" />,
    title: "Pre-Departure Guidance",
    description: "Prepare for your journey with comprehensive guidance on accommodation, travel arrangements, cultural adaptation, and more.",
    features: ["Accommodation guidance", "Travel planning", "Cultural orientation", "Arrival assistance"]
  }
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent">
          Our Comprehensive Services
        </h1>
        <p className="text-xl max-w-3xl mx-auto">
          Edge Education provides end-to-end support for your study abroad journey. From selecting the right university to pre-departure preparation, our expert consultants guide you every step of the way.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card key={service.id} className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="pb-4">
              <div className="mb-4">{service.icon}</div>
              <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
              <CardDescription className="text-base">{service.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">{feature}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-teal-600 hover:bg-teal-700" asChild>
                <Link href="/auth">Inquire About {service.title}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16 p-8 bg-teal-50 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Start Your Educational Journey?</h2>
        <p className="text-lg mb-6 max-w-3xl mx-auto">
          Register with Edge Education today for a free consultation with our expert advisors who will guide you through the entire process.
        </p>
        <Button className="bg-teal-600 hover:bg-teal-700" size="lg" asChild>
          <Link href="/auth">Register Now</Link>
        </Button>
      </div>
    </div>
  );
}