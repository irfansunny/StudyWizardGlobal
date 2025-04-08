import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaqItem } from "@/lib/types";

const Faq = () => {
  const faqs: FaqItem[] = [
    {
      id: 1,
      question: "When should I start the study abroad application process?",
      answer: "We recommend starting at least 12-18 months before your intended start date. This allows sufficient time for researching programs, preparing for standardized tests, gathering documentation, applying for scholarships, and completing the visa process."
    },
    {
      id: 2,
      question: "What standardized tests do I need to take?",
      answer: "This depends on your destination and program. For undergraduate programs, you may need SAT/ACT. For graduate programs, GRE/GMAT might be required. Almost all English-speaking countries require English proficiency tests like IELTS or TOEFL. Some countries also have their own language tests for specific programs."
    },
    {
      id: 3,
      question: "How much does it cost to study abroad?",
      answer: "Costs vary widely depending on the country, city, university, and program. They include tuition fees, living expenses, health insurance, travel costs, and miscellaneous expenses. During your consultation, we'll provide a detailed breakdown of expected costs for your specific situation and discuss scholarship/funding options."
    },
    {
      id: 4,
      question: "What scholarships are available for international students?",
      answer: "Many scholarships are available, including university-specific scholarships, government scholarships, private foundation awards, and country-specific opportunities. Our scholarship guidance service helps identify options you're eligible for and assists with applications to maximize your chances."
    },
    {
      id: 5,
      question: "Can I work while studying abroad?",
      answer: "Work regulations vary by country. Most popular study destinations allow international students to work part-time during the academic year and full-time during breaks. For example, the US allows on-campus employment and limited off-campus work through programs like CPT/OPT. Canada, Australia, and the UK have specific hour limitations and post-study work opportunities."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-slate-600 mx-auto">
            Find answers to common questions about studying abroad.
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                <AccordionTrigger className="text-lg font-medium text-slate-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-slate-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
