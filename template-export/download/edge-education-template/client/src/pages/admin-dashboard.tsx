import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/hooks/use-auth";
import { getQueryFn } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Inquiry, StudentRegistration } from "@shared/schema";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Loader2, LogOut } from "lucide-react";
import { useState } from "react";

export default function AdminDashboard() {
  const { user, logoutMutation } = useAuth();
  const [activeTab, setActiveTab] = useState<string>("inquiries");

  // Fetch inquiries data
  const { 
    data: inquiriesData, 
    isLoading: isLoadingInquiries,
    error: inquiriesError
  } = useQuery<{ success: boolean; data: Inquiry[] }, Error>({
    queryKey: ["/api/inquiries"],
    queryFn: getQueryFn({ on401: "throw" }),
  });

  // Fetch student registrations data
  const { 
    data: registrationsData, 
    isLoading: isLoadingRegistrations,
    error: registrationsError
  } = useQuery<{ success: boolean; data: StudentRegistration[] }, Error>({
    queryKey: ["/api/student-registrations"],
    queryFn: getQueryFn({ on401: "throw" }),
  });

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <div className="min-h-screen bg-muted/20">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Edge Education Admin</h1>
          <p className="text-sm opacity-80">Welcome, {user?.username}</p>
        </div>
        <Button variant="secondary" size="sm" onClick={handleLogout}>
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </Button>
      </header>

      <main className="container py-8">
        <Card>
          <CardHeader>
            <CardTitle>Admin Dashboard</CardTitle>
            <CardDescription>
              Manage inquiries and student registrations from this dashboard.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="inquiries">
                  Inquiries
                  {inquiriesData?.data && (
                    <Badge variant="secondary" className="ml-2">
                      {inquiriesData.data.length}
                    </Badge>
                  )}
                </TabsTrigger>
                <TabsTrigger value="registrations">
                  Student Registrations
                  {registrationsData?.data && (
                    <Badge variant="secondary" className="ml-2">
                      {registrationsData.data.length}
                    </Badge>
                  )}
                </TabsTrigger>
              </TabsList>
              
              {/* Inquiries Tab */}
              <TabsContent value="inquiries">
                {isLoadingInquiries ? (
                  <div className="flex justify-center p-8">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                  </div>
                ) : inquiriesError ? (
                  <div className="text-center p-8 text-destructive">
                    <p>Error loading inquiries: {inquiriesError.message}</p>
                  </div>
                ) : inquiriesData?.data && inquiriesData.data.length > 0 ? (
                  <ScrollArea className="h-[500px] rounded-md border">
                    <div className="p-4 grid gap-4">
                      {inquiriesData.data.map((inquiry) => (
                        <Card key={inquiry.id}>
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="font-semibold text-lg">
                                  {inquiry.firstName} {inquiry.lastName}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                  {new Date(inquiry.createdAt).toLocaleDateString()}
                                </p>
                              </div>
                              <Badge>{inquiry.destination || "General"}</Badge>
                            </div>
                            <div className="grid grid-cols-2 gap-2 mb-3">
                              <div>
                                <p className="text-xs text-muted-foreground">Email</p>
                                <p className="text-sm">{inquiry.email}</p>
                              </div>
                              <div>
                                <p className="text-xs text-muted-foreground">Phone</p>
                                <p className="text-sm">{inquiry.phone}</p>
                              </div>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">Message</p>
                              <p className="text-sm mt-1">{inquiry.message}</p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </ScrollArea>
                ) : (
                  <div className="text-center p-8 text-muted-foreground">
                    <p>No inquiries found.</p>
                  </div>
                )}
              </TabsContent>
              
              {/* Student Registrations Tab */}
              <TabsContent value="registrations">
                {isLoadingRegistrations ? (
                  <div className="flex justify-center p-8">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                  </div>
                ) : registrationsError ? (
                  <div className="text-center p-8 text-destructive">
                    <p>Error loading registrations: {registrationsError.message}</p>
                  </div>
                ) : registrationsData?.data && registrationsData.data.length > 0 ? (
                  <ScrollArea className="h-[500px] rounded-md border">
                    <div className="p-4 grid gap-4">
                      {registrationsData.data.map((registration) => (
                        <Card key={registration.id}>
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="font-semibold text-lg">
                                  {registration.firstName} {registration.lastName}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                  {new Date(registration.createdAt).toLocaleDateString()}
                                </p>
                              </div>
                              <Badge>{registration.destination || "Not specified"}</Badge>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-2 mb-4">
                              <div>
                                <p className="text-xs text-muted-foreground">Email</p>
                                <p className="text-sm">{registration.email}</p>
                              </div>
                              <div>
                                <p className="text-xs text-muted-foreground">Phone</p>
                                <p className="text-sm">{registration.phone}</p>
                              </div>
                              <div>
                                <p className="text-xs text-muted-foreground">Education Level</p>
                                <p className="text-sm">{registration.educationLevel}</p>
                              </div>
                              <div>
                                <p className="text-xs text-muted-foreground">Qualification</p>
                                <p className="text-sm">{registration.highestQualification}</p>
                              </div>
                            </div>
                            
                            {registration.preferredProgram && (
                              <div className="mb-2">
                                <p className="text-xs text-muted-foreground">Preferred Program</p>
                                <p className="text-sm">{registration.preferredProgram}</p>
                              </div>
                            )}
                            
                            {registration.howDidYouHear && (
                              <div className="mb-2">
                                <p className="text-xs text-muted-foreground">How they heard about us</p>
                                <p className="text-sm">{registration.howDidYouHear}</p>
                              </div>
                            )}
                            
                            {registration.notes && (
                              <div>
                                <p className="text-xs text-muted-foreground">Notes</p>
                                <p className="text-sm">{registration.notes}</p>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </ScrollArea>
                ) : (
                  <div className="text-center p-8 text-muted-foreground">
                    <p>No student registrations found.</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}