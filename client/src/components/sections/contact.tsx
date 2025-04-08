import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { 
  Card, 
  CardContent 
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube
} from "lucide-react";
import { ContactFormData } from "@/lib/types";

// Form validation schema
const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(6, { message: "Please enter a valid phone number." }),
  destination: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." })
});

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form setup
  const form = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      destination: "",
      message: ""
    }
  });

  // Submit mutation
  const submitMutation = useMutation({
    mutationFn: (data: ContactFormData) => {
      return apiRequest("POST", "/api/inquiries", data);
    },
    onSuccess: async (response) => {
      const data = await response.json();
      
      toast({
        title: "Success!",
        description: data.message || "Your inquiry has been submitted successfully. We'll contact you soon!",
        variant: "default",
      });
      
      form.reset();
      setIsSubmitting(false);
    },
    onError: (error) => {
      console.error("Error submitting form:", error);
      
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your inquiry. Please try again.",
        variant: "destructive",
      });
      
      setIsSubmitting(false);
    }
  });

  // Form submission handler
  const onSubmit = (data: ContactFormData) => {
    setIsSubmitting(true);
    submitMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-slate-600 mx-auto">
            Schedule a free consultation to discuss your international education journey.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your first name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your last name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="Your phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="destination"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred Destination</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a destination" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="none">Select a destination</SelectItem>
                          <SelectItem value="USA">USA</SelectItem>
                          <SelectItem value="Canada">Canada</SelectItem>
                          <SelectItem value="UK">UK</SelectItem>
                          <SelectItem value="Australia">Australia</SelectItem>
                          <SelectItem value="Europe">Europe</SelectItem>
                          <SelectItem value="Not sure yet">Not sure yet</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your study abroad plans and how we can help you..." 
                          rows={4} 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>

          {/* Contact Information */}
          <Card className="bg-slate-50 overflow-hidden lg:flex lg:flex-col">
            <CardContent className="flex-1 p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary">
                      <MapPin className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-slate-900">Our Offices</h4>
                    <p className="mt-1 text-base text-slate-600">
                      123 Education Avenue<br />
                      Consultancy Plaza, 4th Floor<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary">
                      <Phone className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-slate-900">Phone</h4>
                    <p className="mt-1 text-base text-slate-600">
                      +1 (555) 123-4567<br />
                      +1 (555) 987-6543
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary">
                      <Mail className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-slate-900">Email</h4>
                    <p className="mt-1 text-base text-slate-600">
                      info@globaleduconnect.com<br />
                      admissions@globaleduconnect.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary">
                      <Clock className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-slate-900">Office Hours</h4>
                    <p className="mt-1 text-base text-slate-600">
                      Monday-Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-medium text-slate-900 mb-3">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-slate-500 hover:text-primary">
                    <span className="sr-only">Facebook</span>
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-slate-500 hover:text-primary">
                    <span className="sr-only">Instagram</span>
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-slate-500 hover:text-primary">
                    <span className="sr-only">Twitter</span>
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-slate-500 hover:text-primary">
                    <span className="sr-only">LinkedIn</span>
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-slate-500 hover:text-primary">
                    <span className="sr-only">YouTube</span>
                    <Youtube className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
