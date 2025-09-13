import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserCheck, Calculator, FileText, TrendingUp } from "lucide-react";

interface RoleSelectorProps {
  onRoleSelect: (role: 'pm' | 'finance') => void;
}

export function RoleSelector({ onRoleSelect }: RoleSelectorProps) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Invoice Request Management
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Streamline your invoice request process with automated workflows, 
            real-time tracking, and seamless collaboration between teams.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Project Manager</CardTitle>
              <CardDescription className="text-base">
                Create and track invoice requests
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  Create new invoice requests
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  Upload attachments and documents
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  Track request status in real-time
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  View invoice history and downloads
                </li>
              </ul>
              <Button 
                className="w-full mt-6" 
                onClick={() => onRoleSelect('pm')}
              >
                Continue as PM
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-success/20 transition-colors">
                <Calculator className="w-8 h-8 text-success" />
              </div>
              <CardTitle className="text-2xl">Finance Team</CardTitle>
              <CardDescription className="text-base">
                Review and process invoice requests
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full" />
                  Review incoming requests
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full" />
                  Update request status and comments
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full" />
                  Upload final invoice documents
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full" />
                  Access reporting and analytics
                </li>
              </ul>
              <Button 
                className="w-full mt-6 bg-success hover:bg-success/90" 
                onClick={() => onRoleSelect('finance')}
              >
                Continue as Finance
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <UserCheck className="w-4 h-4" />
              Role-based Access
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Real-time Updates
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Document Management
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}