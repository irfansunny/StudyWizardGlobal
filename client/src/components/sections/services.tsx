import { 
  MessageSquare, 
  GraduationCap, 
  DollarSign, 
  Ticket, 
  FileText, 
  PlaneTakeoff 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Service } from "@/lib/types";

const Services = () => {
  const services: Service[] = [
    {
      id: 1,
      icon: "MessageSquare",
      title: "Personalized Counseling",
      description: "One-on-one sessions to understand your goals, academic background, and preferences to guide you toward the right programs and institutions."
    },
    {
      id: 2,
      icon: "GraduationCap",
      title: "University Admissions",
      description: "Assistance with university selection, application preparation, and submission to maximize your chances of acceptance."
    },
    {
      id: 3,
      icon: "DollarSign",
      title: "Scholarship Guidance",
      description: "Information about available scholarships, eligibility criteria, and application assistance to secure financial support."
    },
    {
      id: 4,
      icon: "Ticket",
      title: "Visa Processing",
      description: "Complete visa application support, documentation preparation, and interview coaching to ensure successful visa approval."
    },
    {
      id: 5,
      icon: "FileText",
      title: "Documentation Support",
      description: "Expert assistance with preparing all necessary documents for admissions, scholarships, and visa applications."
    },
    {
      id: 6,
      icon: "PlaneTakeoff",
      title: "Pre-Departure Guidance",
      description: "Comprehensive orientation about living abroad, cultural adaptation, accommodation options, and practical tips."
    }
  ];

  // Function to render the appropriate icon based on the service icon name
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "MessageSquare":
        return <MessageSquare className="h-6 w-6" />;
      case "GraduationCap":
        return <GraduationCap className="h-6 w-6" />;
      case "DollarSign":
        return <DollarSign className="h-6 w-6" />;
      case "Ticket":
        return <Ticket className="h-6 w-6" />;
      case "FileText":
        return <FileText className="h-6 w-6" />;
      case "PlaneTakeoff":
        return <PlaneTakeoff className="h-6 w-6" />;
      default:
        return <MessageSquare className="h-6 w-6" />;
    }
  };

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Comprehensive Study Abroad Services
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-slate-600 mx-auto">
            From initial counseling to post-visa support, we're with you at every step.
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.id} className="overflow-hidden shadow hover:shadow-md transition-shadow border border-slate-200">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mx-auto">
                    {renderIcon(service.icon)}
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-slate-900">{service.title}</h3>
                  <p className="mt-2 text-base text-slate-600">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
