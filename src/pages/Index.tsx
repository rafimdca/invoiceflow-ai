import { useState } from "react";
import { RoleSelector } from "@/components/RoleSelector";
import { Navigation } from "@/components/Navigation";
import { PMDashboard } from "@/components/pm/PMDashboard";
import { FinanceDashboard } from "@/components/finance/FinanceDashboard";
import { InvoiceRequestForm } from "@/components/pm/InvoiceRequestForm";

type UserRole = 'pm' | 'finance' | null;
type AppView = 'role-select' | 'dashboard' | 'create-request';

const Index = () => {
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [currentView, setCurrentView] = useState<AppView>('role-select');
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleRoleSelect = (role: 'pm' | 'finance') => {
    setUserRole(role);
    setCurrentView('dashboard');
    setActiveTab('dashboard');
  };

  const handleLogout = () => {
    setUserRole(null);
    setCurrentView('role-select');
    setActiveTab('dashboard');
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'create') {
      setCurrentView('create-request');
    } else {
      setCurrentView('dashboard');
    }
  };

  const handleCreateRequest = () => {
    setCurrentView('create-request');
    setActiveTab('create');
  };

  const handleBackToDashboard = () => {
    setCurrentView('dashboard');
    setActiveTab('dashboard');
  };

  if (currentView === 'role-select') {
    return <RoleSelector onRoleSelect={handleRoleSelect} />;
  }

  return (
    <div className="min-h-screen bg-background">
      {userRole && (
        <Navigation
          role={userRole}
          activeTab={activeTab}
          onTabChange={handleTabChange}
          onLogout={handleLogout}
        />
      )}
      
      <main className="container mx-auto px-6 py-8">
        {currentView === 'dashboard' && userRole === 'pm' && (
          <PMDashboard onCreateRequest={handleCreateRequest} />
        )}
        
        {currentView === 'dashboard' && userRole === 'finance' && (
          <FinanceDashboard />
        )}
        
        {currentView === 'create-request' && userRole === 'pm' && (
          <InvoiceRequestForm onBack={handleBackToDashboard} />
        )}
      </main>
    </div>
  );
};

export default Index;
