import { Link } from "wouter";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Youtube 
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="text-white text-2xl font-bold">GlobalEduConnect</div>
            <p className="text-slate-400 text-base">
              Your trusted partner for international education opportunities. We help students achieve their dreams of studying abroad through personalized guidance and support.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-slate-300">
                <span className="sr-only">Facebook</span>
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-slate-300">
                <span className="sr-only">Instagram</span>
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-slate-300">
                <span className="sr-only">Twitter</span>
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-slate-300">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-slate-300">
                <span className="sr-only">YouTube</span>
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-slate-300 tracking-wider uppercase">
                  Destinations
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="#usa" className="text-base text-slate-400 hover:text-slate-300">
                      Study in USA
                    </Link>
                  </li>
                  <li>
                    <Link href="#canada" className="text-base text-slate-400 hover:text-slate-300">
                      Study in Canada
                    </Link>
                  </li>
                  <li>
                    <Link href="#uk" className="text-base text-slate-400 hover:text-slate-300">
                      Study in UK
                    </Link>
                  </li>
                  <li>
                    <Link href="#australia" className="text-base text-slate-400 hover:text-slate-300">
                      Study in Australia
                    </Link>
                  </li>
                  <li>
                    <Link href="#europe" className="text-base text-slate-400 hover:text-slate-300">
                      Study in Europe
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-slate-300 tracking-wider uppercase">
                  Services
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="#services" className="text-base text-slate-400 hover:text-slate-300">
                      Counseling
                    </Link>
                  </li>
                  <li>
                    <Link href="#services" className="text-base text-slate-400 hover:text-slate-300">
                      University Admissions
                    </Link>
                  </li>
                  <li>
                    <Link href="#services" className="text-base text-slate-400 hover:text-slate-300">
                      Scholarship Guidance
                    </Link>
                  </li>
                  <li>
                    <Link href="#services" className="text-base text-slate-400 hover:text-slate-300">
                      Visa Processing
                    </Link>
                  </li>
                  <li>
                    <Link href="#services" className="text-base text-slate-400 hover:text-slate-300">
                      Documentation Support
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-slate-300 tracking-wider uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="#about" className="text-base text-slate-400 hover:text-slate-300">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#testimonials" className="text-base text-slate-400 hover:text-slate-300">
                      Success Stories
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="text-base text-slate-400 hover:text-slate-300">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-slate-400 hover:text-slate-300">
                      Careers
                    </a>
                  </li>
                  <li>
                    <Link href="#contact" className="text-base text-slate-400 hover:text-slate-300">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-slate-300 tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-base text-slate-400 hover:text-slate-300">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-slate-400 hover:text-slate-300">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-slate-400 hover:text-slate-300">
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-700 pt-8">
          <p className="text-base text-slate-400 xl:text-center">
            &copy; {new Date().getFullYear()} GlobalEduConnect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
