import { 
  UserCheck, 
  Target, 
  Handshake 
} from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            About GlobalEduConnect
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-slate-600 mx-auto">
            Guiding students toward global educational opportunities for over 15 years.
          </p>
        </div>

        <div className="mt-12 lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-5">
            <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
            <p className="mt-3 text-lg text-slate-600">
              We're dedicated to helping students access quality international education opportunities that align with their academic goals, career aspirations, and personal growth objectives.
            </p>
            <p className="mt-3 text-lg text-slate-600">
              Our team of experienced consultants brings first-hand knowledge of international education systems and visa processes across major study destinations.
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary">
                    <UserCheck className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-slate-900">Experienced Counselors</h4>
                  <p className="mt-1 text-base text-slate-600">Our advisors have worked with thousands of students and maintain direct relationships with universities worldwide.</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary">
                    <Target className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-slate-900">Personalized Approach</h4>
                  <p className="mt-1 text-base text-slate-600">We believe every student is unique, so we tailor our guidance to your specific situation and goals.</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary">
                    <Handshake className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-slate-900">University Partnerships</h4>
                  <p className="mt-1 text-base text-slate-600">Our direct relationships with universities worldwide give our students an advantage in the application process.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 lg:mt-0 lg:col-span-7">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Team Meeting" 
                className="w-full h-96 object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
