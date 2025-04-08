import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const Cta = () => {
  return (
    <section className="bg-primary-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Ready to start your education journey with Edge Education?</span>
          <span className="block text-primary-300">Get your free consultation today.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Button asChild variant="secondary">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <Button asChild>
              <Link href="/services">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
