// Service types
export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
}

// Destination types
export interface DestinationFeature {
  text: string;
}

export interface Destination {
  id: string;
  name: string;
  description: string;
  features: DestinationFeature[];
  image: string;
}

// Process step type
export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

// Testimonial type
export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  position: string;
  rating: number;
}

// FAQ item type
export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

// Team member type
export interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
}

// Contact form fields
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  destination: string;
  message: string;
}
