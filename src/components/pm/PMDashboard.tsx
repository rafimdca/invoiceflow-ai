import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Plus,
  Download,
  Eye
} from "lucide-react";

interface PMDashboardProps {
  onCreateRequest: () => void;
}

// Mock data for demonstration
const dashboardStats = {
  totalRequests: 24,
  pending: 3,
  inProgress: 5,
  completed: 16
};

const recentRequests = [
  {
    id: 'REQ-001',
    customerName: 'Acme Corporation',
    amount: '$12,500.00',
    status: 'In Progress',
    date: '2024-01-15',
    invoiceNumber: null
  },
  {
    id: 'REQ-002',
    customerName: 'Tech Solutions Ltd',
    amount: '$8,750.00',
    status: 'Completed',
    date: '2024-01-14',
    invoiceNumber: 'INV-2024-0145'
  },
  {
    id: 'REQ-003',
    customerName: 'Global Enterprises',
    amount: '$25,000.00',
    status: 'Submitted',
    date: '2024-01-13',
    invoiceNumber: null
  }
];

export function PMDashboard({ onCreateRequest }: PMDashboardProps) {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Submitted':
        return <Badge variant="secondary" className="bg-warning/10 text-warning hover:bg-warning/20">Submitted</Badge>;
      case 'In Progress':
        return <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">In Progress</Badge>;
      case 'Completed':
        return <Badge variant="secondary" className="bg-success/10 text-success hover:bg-success/20">Completed</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Welcome back!</h2>
          <p className="text-muted-foreground">Manage your invoice requests and track their progress.</p>
        </div>
        <Button onClick={onCreateRequest} className="gap-2">
          <Plus className="w-4 h-4" />
          New Request
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Requests</CardDescription>
            <CardTitle className="text-2xl">{dashboardStats.totalRequests}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <FileText className="w-4 h-4" />
              All time
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Pending Review</CardDescription>
            <CardTitle className="text-2xl text-warning">{dashboardStats.pending}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <AlertCircle className="w-4 h-4" />
              Awaiting finance
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>In Progress</CardDescription>
            <CardTitle className="text-2xl text-primary">{dashboardStats.inProgress}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              Being processed
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Completed</CardDescription>
            <CardTitle className="text-2xl text-success">{dashboardStats.completed}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4" />
              Ready to download
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Requests */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Requests</CardTitle>
          <CardDescription>Your latest invoice requests and their current status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentRequests.map((request) => (
              <div key={request.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{request.customerName}</h4>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{request.id}</span>
                      <span>{request.date}</span>
                      <span className="font-medium">{request.amount}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {getStatusBadge(request.status)}
                  {request.invoiceNumber && (
                    <div className="text-sm text-muted-foreground">
                      {request.invoiceNumber}
                    </div>
                  )}
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Eye className="w-4 h-4" />
                      View
                    </Button>
                    {request.status === 'Completed' && (
                      <Button variant="ghost" size="sm" className="gap-2 text-success">
                        <Download className="w-4 h-4" />
                        Download
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}