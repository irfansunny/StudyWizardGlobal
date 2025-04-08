import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertInquirySchema, insertStudentRegistrationSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";
import { setupAuth } from "./auth";

export async function registerRoutes(app: Express): Promise<Server> {
  // Set up authentication routes (/api/register, /api/login, /api/logout, /api/user)
  setupAuth(app);
  // API route to handle contact form submissions
  app.post("/api/inquiries", async (req: Request, res: Response) => {
    try {
      // Validate request body using zod schema
      const validatedData = insertInquirySchema.parse(req.body);
      
      // Store the inquiry in the database
      const inquiry = await storage.createInquiry(validatedData);
      
      // Return success response
      res.status(201).json({ 
        success: true, 
        message: "Your inquiry has been submitted successfully. We'll contact you soon!",
        data: inquiry 
      });
    } catch (error) {
      // Handle validation errors
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: validationError.message 
        });
      } else {
        // Handle other errors
        console.error("Error submitting inquiry:", error);
        res.status(500).json({ 
          success: false, 
          message: "An error occurred while submitting your inquiry. Please try again." 
        });
      }
    }
  });

  // API route to get all inquiries (admin only)
  app.get("/api/inquiries", (req: Request, res: Response, next) => {
    // Check if user is authenticated
    if (!req.isAuthenticated()) {
      return res.status(401).json({ 
        success: false, 
        message: "Authentication required" 
      });
    }
    next();
  }, async (_req: Request, res: Response) => {
    try {
      const inquiries = await storage.getAllInquiries();
      res.status(200).json({ success: true, data: inquiries });
    } catch (error) {
      console.error("Error fetching inquiries:", error);
      res.status(500).json({ 
        success: false, 
        message: "An error occurred while fetching inquiries." 
      });
    }
  });
  
  // API route to handle student registration form submissions
  app.post("/api/student-registrations", async (req: Request, res: Response) => {
    try {
      // Validate request body using zod schema
      const validatedData = insertStudentRegistrationSchema.parse(req.body);
      
      // Store the registration in the database
      const registration = await storage.createStudentRegistration(validatedData);
      
      // Return success response
      res.status(201).json({ 
        success: true, 
        message: "Your registration has been submitted successfully. Our team will review your application and contact you soon!",
        data: registration 
      });
    } catch (error) {
      // Handle validation errors
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: validationError.message 
        });
      } else {
        // Handle other errors
        console.error("Error submitting student registration:", error);
        res.status(500).json({ 
          success: false, 
          message: "An error occurred while submitting your registration. Please try again." 
        });
      }
    }
  });

  // API route to get all student registrations (admin only)
  app.get("/api/student-registrations", (req: Request, res: Response, next) => {
    // Check if user is authenticated
    if (!req.isAuthenticated()) {
      return res.status(401).json({ 
        success: false, 
        message: "Authentication required" 
      });
    }
    next();
  }, async (_req: Request, res: Response) => {
    try {
      const registrations = await storage.getAllStudentRegistrations();
      res.status(200).json({ success: true, data: registrations });
    } catch (error) {
      console.error("Error fetching student registrations:", error);
      res.status(500).json({ 
        success: false, 
        message: "An error occurred while fetching student registrations." 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
