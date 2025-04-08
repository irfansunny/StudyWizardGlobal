import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Clock, Award, BookOpen, Lightbulb } from "lucide-react";
import { Link } from "wouter";

const stats = [
  { id: 1, label: "Students Counseled", value: "10,000+" },
  { id: 2, label: "University Partners", value: "500+" },
  { id: 3, label: "Countries", value: "15+" },
  { id: 4, label: "Success Rate", value: "98%" }
];

const values = [
  {
    id: 1,
    icon: <Users className="h-10 w-10 text-teal-500" />,
    title: "Student-Centered Approach",
    description: "We prioritize each student's unique needs, goals, and circumstances, providing personalized guidance throughout their educational journey."
  },
  {
    id: 2,
    icon: <Award className="h-10 w-10 text-teal-500" />,
    title: "Excellence and Integrity",
    description: "We uphold the highest standards of professionalism, honesty, and transparency in all our interactions with students and institutions."
  },
  {
    id: 3,
    icon: <BookOpen className="h-10 w-10 text-teal-500" />,
    title: "Knowledge and Expertise",
    description: "Our team continuously updates their knowledge about global education systems, immigration policies, and industry trends to provide accurate guidance."
  },
  {
    id: 4,
    icon: <Lightbulb className="h-10 w-10 text-teal-500" />,
    title: "Innovation and Adaptability",
    description: "We embrace new technologies and adapt our services to meet evolving student needs and changing global education landscapes."
  }
];

const timeline = [
  {
    id: 1,
    year: "2010",
    title: "Founding of Edge Education",
    description: "Started as a small consulting firm with a vision to help students achieve their international education dreams."
  },
  {
    id: 2,
    year: "2013",
    title: "Expansion of Services",
    description: "Added comprehensive visa guidance and pre-departure support to our service portfolio."
  },
  {
    id: 3,
    year: "2015",
    title: "International Partnerships",
    description: "Established partnerships with universities across the USA, UK, Canada, and Australia."
  },
  {
    id: 4,
    year: "2018",
    title: "European Expansion",
    description: "Added European study destinations to our portfolio, including Germany, France, and the Netherlands."
  },
  {
    id: 5,
    year: "2020",
    title: "Digital Transformation",
    description: "Launched virtual counseling services to reach students globally during the pandemic."
  },
  {
    id: 6,
    year: "2023",
    title: "Milestone Achievement",
    description: "Celebrated helping our 10,000th student achieve their study abroad dreams."
  }
];

export default function AboutPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent">
          About Edge Education
        </h1>
        <p className="text-xl max-w-3xl mx-auto">
          Since 2010, Edge Education has been guiding students toward achieving their international education dreams with personalized counseling and comprehensive support.
        </p>
      </div>
      
      {/* Mission Statement */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-400 text-white p-10 rounded-lg mb-16">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg">
          To empower students by providing expert guidance, personalized support, and comprehensive resources that enable them to access quality global education opportunities that align with their aspirations, abilities, and career goals.
        </p>
      </div>
      
      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((stat) => (
          <Card key={stat.id} className="text-center shadow-md">
            <CardContent className="pt-6">
              <p className="text-4xl font-bold text-teal-600 mb-2">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Core Values */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value) => (
            <div key={value.id} className="flex space-x-4">
              <div className="flex-shrink-0 mt-1">{value.icon}</div>
              <div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Company Timeline */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">Our Journey</h2>
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-teal-200"></div>
          
          {/* Timeline Items */}
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={item.id} className="relative">
                <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Year */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-10' : 'md:text-left md:pl-10'}`}>
                    <span className="inline-block px-4 py-2 bg-teal-100 text-teal-800 font-bold rounded-lg mb-4 md:mb-0">
                      {item.year}
                    </span>
                  </div>
                  
                  {/* Circle */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-6 h-6 bg-teal-500 rounded-full border-4 border-white"></div>
                  </div>
                  
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-left md:pl-10' : 'md:text-right md:pr-10'}`}>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Why Choose Us */}
      <div className="bg-gray-50 p-10 rounded-lg mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Edge Education?</h2>
        <div className="space-y-4">
          {[
            "Personalized guidance tailored to your academic profile and career goals",
            "Expert counselors with in-depth knowledge of global education systems",
            "Comprehensive support from university selection to pre-departure preparation",
            "Strong relationships with top universities worldwide",
            "High success rate in securing admissions and visas",
            "Ongoing support throughout your educational journey abroad"
          ].map((point, index) => (
            <div key={index} className="flex items-start">
              <CheckCircle className="h-6 w-6 text-teal-500 mr-3 flex-shrink-0 mt-0.5" />
              <p className="text-lg">{point}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-6">Ready to Start Your Educational Journey?</h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Contact Edge Education today for a free consultation with our expert advisors who will guide you through the entire process of studying abroad.
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