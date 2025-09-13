import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  FileText, 
  Calculator, 
  Home, 
  Plus, 
  Clock, 
  CheckCircle, 
  BarChart3,
  LogOut 
} from "lucide-react";

interface NavigationProps {
  role: 'pm' | 'finance';
  activeTab: string;
  onTabChange: (tab: string) => void;
  onLogout: () => void;
}

export function Navigation({ role, activeTab, onTabChange, onLogout }: NavigationProps) {
  const pmTabs = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'create', label: 'New Request', icon: Plus },
    { id: 'pending', label: 'Pending', icon: Clock },
    { id: 'history', label: 'History', icon: CheckCircle },
  ];

  const financeTabs = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'requests', label: 'All Requests', icon: FileText },
    { id: 'in-progress', label: 'In Progress', icon: Clock },
    { id: 'completed', label: 'Completed', icon: CheckCircle },
    { id: 'reports', label: 'Reports', icon: BarChart3 },
  ];

  const tabs = role === 'pm' ? pmTabs : financeTabs;
  const roleColor = role === 'pm' ? 'text-primary' : 'text-success';
  const roleIcon = role === 'pm' ? FileText : Calculator;
  const RoleIcon = roleIcon;

  return (
    <nav className="bg-card border-b border-border px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center`}>
              <RoleIcon className={`w-5 h-5 ${roleColor}`} />
            </div>
            <div>
              <h1 className="font-semibold text-foreground">Invoice Management</h1>
              <p className="text-sm text-muted-foreground">
                {role === 'pm' ? 'Project Manager' : 'Finance Team'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <Button
                  key={tab.id}
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  onClick={() => onTabChange(tab.id)}
                  className={`gap-2 ${isActive ? '' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </Button>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Avatar className="w-8 h-8">
            <AvatarFallback className="text-xs">
              {role === 'pm' ? 'PM' : 'FN'}
            </AvatarFallback>
          </Avatar>
          <Button variant="ghost" size="sm" onClick={onLogout} className="gap-2">
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>
      </div>
    </nav>
  );
}