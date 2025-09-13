import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  FileText, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  DollarSign,
  Search,
  Filter,
  Upload,
  Edit
} from "lucide-react";

// Mock data for demonstration
const dashboardStats = {
  totalRequests: 47,
  pending: 8,
  inProgress: 12,
  completed: 27,
  totalAmount: '$485,750.00'
};

const incomingRequests = [
  {
    id: 'REQ-004',
    pmName: 'John Smith',
    customerName: 'Beta Industries',
    amount: '$15,200.00',
    status: 'Submitted',
    date: '2024-01-16',
    priority: 'High'
  },
  {
    id: 'REQ-005',
    pmName: 'Sarah Johnson',
    customerName: 'Delta Corp',
    amount: '$9,800.00',
    status: 'In Progress',
    date: '2024-01-15',
    priority: 'Medium'
  },
  {
    id: 'REQ-006',
    pmName: 'Mike Chen',
    customerName: 'Gamma Systems',
    amount: '$22,500.00',
    status: 'Submitted',
    date: '2024-01-14',
    priority: 'High'
  }
];

export function FinanceDashboard() {
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

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'High':
        return <Badge variant="destructive" className="text-xs">High</Badge>;
      case 'Medium':
        return <Badge variant="secondary" className="text-xs">Medium</Badge>;
      case 'Low':
        return <Badge variant="outline" className="text-xs">Low</Badge>;
      default:
        return <Badge variant="outline" className="text-xs">{priority}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div>
        <h2 className="text-2xl font-bold text-foreground">Finance Dashboard</h2>
        <p className="text-muted-foreground">Review and process incoming invoice requests from project managers.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Requests</CardDescription>
            <CardTitle className="text-2xl">{dashboardStats.totalRequests}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <FileText className="w-4 h-4" />
              All requests
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
              Need attention
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
              Processing
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
              Processed
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Amount</CardDescription>
            <CardTitle className="text-2xl">{dashboardStats.totalAmount}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <DollarSign className="w-4 h-4" />
              All requests
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Request Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input className="pl-10" placeholder="Search requests..." />
              </div>
            </div>
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="submitted">Submitted</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priority</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              More Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Incoming Requests */}
      <Card>
        <CardHeader>
          <CardTitle>Incoming Requests</CardTitle>
          <CardDescription>Review and process pending invoice requests</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {incomingRequests.map((request) => (
              <div key={request.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium text-foreground">{request.customerName}</h4>
                      {getPriorityBadge(request.priority)}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{request.id}</span>
                      <span>PM: {request.pmName}</span>
                      <span>{request.date}</span>
                      <span className="font-medium">{request.amount}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {getStatusBadge(request.status)}
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Edit className="w-4 h-4" />
                      Review
                    </Button>
                    {request.status === 'In Progress' && (
                      <Button variant="ghost" size="sm" className="gap-2 text-success">
                        <Upload className="w-4 h-4" />
                        Upload Invoice
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