import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Database, 
  Users, 
  FileText, 
  Brain,
  CheckCircle,
  ArrowRight
} from "lucide-react";

export function Documentation() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 p-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Invoice Request Management</h1>
        <p className="text-lg text-muted-foreground">Complete documentation and implementation guide</p>
      </div>

      {/* Google Sheets Schema */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="w-5 h-5" />
            Google Sheets Backend Schema
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6">
            {/* InvoiceRequests Table */}
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-3">InvoiceRequests Sheet</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-sm">
                <Badge variant="outline">RequestID (Auto ID)</Badge>
                <Badge variant="outline">PM_Email</Badge>
                <Badge variant="outline">CustomerName</Badge>
                <Badge variant="outline">CustomerID</Badge>
                <Badge variant="outline">LegalEntity</Badge>
                <Badge variant="outline">Currency</Badge>
                <Badge variant="outline">PaymentDetails</Badge>
                <Badge variant="outline">InvoiceAmount</Badge>
                <Badge variant="outline">Status</Badge>
                <Badge variant="outline">ApprovalFileLink</Badge>
                <Badge variant="outline">CalculationFileLink</Badge>
                <Badge variant="outline">InvoiceFileLink</Badge>
                <Badge variant="outline">InvoiceNumber</Badge>
                <Badge variant="outline">FinanceReviewer</Badge>
                <Badge variant="outline">CreatedDate</Badge>
                <Badge variant="outline">LastUpdated</Badge>
              </div>
            </div>

            {/* InvoiceLineItems Table */}
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-3">InvoiceLineItems Sheet</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-sm">
                <Badge variant="outline">LineItemID (Auto ID)</Badge>
                <Badge variant="outline">RequestID (Foreign Key)</Badge>
                <Badge variant="outline">ItemDescription</Badge>
                <Badge variant="outline">Quantity</Badge>
                <Badge variant="outline">UnitPrice</Badge>
                <Badge variant="outline">BasicAmount</Badge>
                <Badge variant="outline">Tax</Badge>
                <Badge variant="outline">TotalAmount</Badge>
              </div>
            </div>

            {/* Users Table */}
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-3">Users Sheet</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-sm">
                <Badge variant="outline">UserEmail</Badge>
                <Badge variant="outline">Role (PM/Finance)</Badge>
                <Badge variant="outline">Name</Badge>
                <Badge variant="outline">Department</Badge>
              </div>
            </div>

            {/* AuditLogs Table */}
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-3">AuditLogs Sheet</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-sm">
                <Badge variant="outline">LogID (Auto ID)</Badge>
                <Badge variant="outline">RequestID</Badge>
                <Badge variant="outline">Action</Badge>
                <Badge variant="outline">Actor (UserEmail)</Badge>
                <Badge variant="outline">Timestamp</Badge>
                <Badge variant="outline">Details</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI Features */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-5 h-5" />
            AI-Powered Features
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Smart Validation</h4>
                <p className="text-sm text-muted-foreground">Validate line item uploads, check totals, tax mismatches, missing fields</p>
              </div>
              <div>
                <h4 className="font-semibold">Invoice Number Extraction</h4>
                <p className="text-sm text-muted-foreground">AI reads uploaded PDF invoices, auto-captures invoice numbers</p>
              </div>
              <div>
                <h4 className="font-semibold">Anomaly Detection</h4>
                <p className="text-sm text-muted-foreground">Flag suspicious data like wrong tax percentages or unusual amounts</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Predictive Suggestions</h4>
                <p className="text-sm text-muted-foreground">Suggest past customer details, line items, or amounts based on history</p>
              </div>
              <div>
                <h4 className="font-semibold">Automated Workflow</h4>
                <p className="text-sm text-muted-foreground">Auto-assign Finance reviewer based on workload and expertise</p>
              </div>
              <div>
                <h4 className="font-semibold">RAG-based Assistant</h4>
                <p className="text-sm text-muted-foreground">Help chatbot that answers FAQs about the invoice process</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* User Workflows */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            User Workflows & Navigation Guide
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* PM Workflow */}
          <div className="border rounded-lg p-6">
            <h3 className="font-semibold text-primary mb-4">Project Manager Workflow</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">1</div>
                <span>Login with Google ID → Select "Project Manager" role</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">2</div>
                <span>Click "New Request" → Fill basic information (Legal Entity, Customer, Currency)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">3</div>
                <span>Upload attachments (Customer approval, Calculation workings)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">4</div>
                <span>Add line items manually OR bulk upload via Excel template</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">5</div>
                <span>Review total amount → Submit request → Track status in "Pending" tab</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">6</div>
                <span>Get notifications when Finance updates status → Download final invoice from "History"</span>
              </div>
            </div>
          </div>

          {/* Finance Workflow */}
          <div className="border rounded-lg p-6">
            <h3 className="font-semibold text-success mb-4">Finance Team Workflow</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-success text-success-foreground rounded-full flex items-center justify-center text-xs font-bold">1</div>
                <span>Login with Google ID → Select "Finance Team" role</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-success text-success-foreground rounded-full flex items-center justify-center text-xs font-bold">2</div>
                <span>View "All Requests" dashboard → Filter by status, PM, customer, date</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-success text-success-foreground rounded-full flex items-center justify-center text-xs font-bold">3</div>
                <span>Click "Review" on request → Validate line items and attachments</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-success text-success-foreground rounded-full flex items-center justify-center text-xs font-bold">4</div>
                <span>Update status to "In Progress" → Add comments if needed</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-success text-success-foreground rounded-full flex items-center justify-center text-xs font-bold">5</div>
                <span>Generate invoice → Upload invoice file → Enter invoice number</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-success text-success-foreground rounded-full flex items-center justify-center text-xs font-bold">6</div>
                <span>Mark as "Completed" → PM gets automatic notification with download link</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Implementation Features */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Key Implementation Features
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success" />
                <span className="text-sm">Role-based authentication with Google ID</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success" />
                <span className="text-sm">Real-time status updates and notifications</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success" />
                <span className="text-sm">File upload with Google Drive integration</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success" />
                <span className="text-sm">Bulk line item upload via Excel/CSV</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success" />
                <span className="text-sm">Automatic calculations and validations</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success" />
                <span className="text-sm">Advanced filtering and search capabilities</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success" />
                <span className="text-sm">Comprehensive reporting and analytics</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success" />
                <span className="text-sm">Audit trail for all actions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success" />
                <span className="text-sm">Mobile-responsive design</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success" />
                <span className="text-sm">Professional invoice templates</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}