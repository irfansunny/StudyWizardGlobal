import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  ChevronDown, 
  Menu, 
  X 
} from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDestinationsOpen, setIsMobileDestinationsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setIsMobileDestinationsOpen(false);
    }
  };

  const toggleMobileDestinations = () => {
    setIsMobileDestinationsOpen(!isMobileDestinationsOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and desktop nav */}
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-primary text-xl font-bold">GlobalEduConnect</Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/" className="border-primary text-slate-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Home
              </Link>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="inline-flex items-center px-1 pt-1 text-sm font-medium text-slate-700 hover:text-slate-900">
                    Destinations
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  <DropdownMenuItem asChild>
                    <Link href="#usa" className="w-full">USA</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="#canada" className="w-full">Canada</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="#uk" className="w-full">UK</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="#australia" className="w-full">Australia</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="#europe" className="w-full">Europe</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Link href="#services" className="border-transparent text-slate-700 hover:border-slate-300 hover:text-slate-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Services
              </Link>
              
              <Link href="#about" className="border-transparent text-slate-700 hover:border-slate-300 hover:text-slate-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                About Us
              </Link>
              
              <Link href="#testimonials" className="border-transparent text-slate-700 hover:border-slate-300 hover:text-slate-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Success Stories
              </Link>
              
              <Link href="#faq" className="border-transparent text-slate-700 hover:border-slate-300 hover:text-slate-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                FAQ
              </Link>
            </div>
          </div>

          {/* Contact Us button (desktop) */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Button asChild>
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex items-center sm:hidden">
            <button 
              type="button" 
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link href="/" className="bg-primary-50 border-primary text-primary-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
            Home
          </Link>
          
          <button 
            className="border-transparent text-slate-500 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium flex justify-between items-center w-full"
            onClick={toggleMobileDestinations}
          >
            Destinations
            <ChevronDown className={`h-5 w-5 transition-transform ${isMobileDestinationsOpen ? 'transform rotate-180' : ''}`} />
          </button>
          
          <div className={`pl-4 ${isMobileDestinationsOpen ? 'block' : 'hidden'}`}>
            <Link href="#usa" className="border-transparent text-slate-500 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              USA
            </Link>
            <Link href="#canada" className="border-transparent text-slate-500 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Canada
            </Link>
            <Link href="#uk" className="border-transparent text-slate-500 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              UK
            </Link>
            <Link href="#australia" className="border-transparent text-slate-500 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Australia
            </Link>
            <Link href="#europe" className="border-transparent text-slate-500 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Europe
            </Link>
          </div>
          
          <Link href="#services" className="border-transparent text-slate-500 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
            Services
          </Link>
          
          <Link href="#about" className="border-transparent text-slate-500 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
            About Us
          </Link>
          
          <Link href="#testimonials" className="border-transparent text-slate-500 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
            Success Stories
          </Link>
          
          <Link href="#faq" className="border-transparent text-slate-500 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
            FAQ
          </Link>
          
          <Link href="#contact" className="border-transparent text-primary hover:bg-primary-50 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
