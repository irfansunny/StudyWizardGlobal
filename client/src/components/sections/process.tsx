import { ProcessStep } from "@/lib/types";

const Process = () => {
  const stepsFirstRow: ProcessStep[] = [
    {
      number: 1,
      title: "Initial Consultation",
      description: "Meet with our experts to discuss your educational background, career goals, and preferences to create a personalized study plan."
    },
    {
      number: 2,
      title: "University & Program Selection",
      description: "Based on your profile, we recommend universities and programs that align with your academic achievements, budget, and career objectives."
    },
    {
      number: 3,
      title: "Application & Admissions",
      description: "We guide you through the entire application process, helping prepare compelling statements, recommendation letters, and other required documents."
    }
  ];

  const stepsSecondRow: ProcessStep[] = [
    {
      number: 4,
      title: "Scholarship Applications",
      description: "Identify and apply for relevant scholarships and financial aid opportunities to help fund your education abroad."
    },
    {
      number: 5,
      title: "Visa Processing",
      description: "Complete visa preparation including documentation, application submission, and interview coaching to ensure successful approval."
    },
    {
      number: 6,
      title: "Pre-Departure & Ongoing Support",
      description: "Comprehensive orientation for living abroad, including accommodation, travel arrangements, and continuous support throughout your studies."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Our Simple Process
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-slate-600 mx-auto">
            We make studying abroad straightforward with our proven step-by-step approach.
          </p>
        </div>

        <div className="mt-12">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            {stepsFirstRow.map((step, index) => (
              <div key={step.number} className="relative mt-10 first:mt-0 lg:mt-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mb-4">
                  <span className="text-lg font-bold">{step.number}</span>
                </div>
                <h3 className="text-xl font-medium text-slate-900">{step.title}</h3>
                <p className="mt-2 text-base text-slate-600">
                  {step.description}
                </p>
                {/* Arrow connector (only on desktop and not for the last item) */}
                {index < stepsFirstRow.length - 1 && (
                  <div className="hidden lg:block absolute top-0 right-0 h-full w-5 transform translate-x-1/2">
                    <svg className="h-full text-slate-300" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none">
                      <path d="M0 -2L20 40L0 82" stroke="currentcolor" strokeWidth="2"></path>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 lg:mt-16 lg:grid lg:grid-cols-3 lg:gap-8">
            {stepsSecondRow.map((step, index) => (
              <div key={step.number} className="relative mt-10 first:mt-0 lg:mt-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mb-4">
                  <span className="text-lg font-bold">{step.number}</span>
                </div>
                <h3 className="text-xl font-medium text-slate-900">{step.title}</h3>
                <p className="mt-2 text-base text-slate-600">
                  {step.description}
                </p>
                {/* Arrow connector (only on desktop and not for the last item) */}
                {index < stepsSecondRow.length - 1 && (
                  <div className="hidden lg:block absolute top-0 right-0 h-full w-5 transform translate-x-1/2">
                    <svg className="h-full text-slate-300" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none">
                      <path d="M0 -2L20 40L0 82" stroke="currentcolor" strokeWidth="2"></path>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
