import { 
  users, type User, type InsertUser, 
  inquiries, type Inquiry, type InsertInquiry,
  studentRegistrations, type StudentRegistration, type InsertStudentRegistration 
} from "@shared/schema";
import session from "express-session";
import createMemoryStore from "memorystore";

const MemoryStore = createMemoryStore(session);

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  getAllInquiries(): Promise<Inquiry[]>;
  createStudentRegistration(registration: InsertStudentRegistration): Promise<StudentRegistration>;
  getAllStudentRegistrations(): Promise<StudentRegistration[]>;
  sessionStore: session.Store;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private inquiriesMap: Map<number, Inquiry>;
  private studentRegistrationsMap: Map<number, StudentRegistration>;
  currentUserId: number;
  currentInquiryId: number;
  currentStudentRegistrationId: number;
  sessionStore: session.Store;

  constructor() {
    this.users = new Map();
    this.inquiriesMap = new Map();
    this.studentRegistrationsMap = new Map();
    this.currentUserId = 1;
    this.currentInquiryId = 1;
    this.currentStudentRegistrationId = 1;
    this.sessionStore = new MemoryStore({
      checkPeriod: 86400000, // 24 hours
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const id = this.currentInquiryId++;
    const inquiry: Inquiry = { 
      ...insertInquiry, 
      id, 
      createdAt: new Date(),
      destination: insertInquiry.destination || null
    };
    this.inquiriesMap.set(id, inquiry);
    return inquiry;
  }

  async getAllInquiries(): Promise<Inquiry[]> {
    return Array.from(this.inquiriesMap.values());
  }

  async createStudentRegistration(insertRegistration: InsertStudentRegistration): Promise<StudentRegistration> {
    const id = this.currentStudentRegistrationId++;
    const registration: StudentRegistration = { 
      ...insertRegistration, 
      id, 
      createdAt: new Date(),
      destination: insertRegistration.destination || null,
      preferredProgram: insertRegistration.preferredProgram || null,
      howDidYouHear: insertRegistration.howDidYouHear || null,
      notes: insertRegistration.notes || null
    };
    this.studentRegistrationsMap.set(id, registration);
    return registration;
  }

  async getAllStudentRegistrations(): Promise<StudentRegistration[]> {
    return Array.from(this.studentRegistrationsMap.values());
  }
}

export const storage = new MemStorage();
