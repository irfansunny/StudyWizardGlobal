import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertInquirySchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
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

  // API route to get all inquiries (could be used in an admin panel)
  app.get("/api/inquiries", async (_req: Request, res: Response) => {
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

  const httpServer = createServer(app);

  return httpServer;
}
