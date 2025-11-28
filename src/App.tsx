import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import ClientDashboard from './components/ClientDashboard';
import VendorDashboard from './components/VendorDashboard';
import EquipmentListing from './components/EquipmentListing';
import EquipmentDetails from './components/EquipmentDetails';
import RentalWorkflow from './components/RentalWorkflow';
import AdminDashboard from './components/AdminDashboard';

type Page = 'landing' | 'client-dashboard' | 'vendor-dashboard' | 'equipment-listing' | 'equipment-details' | 'rental-workflow' | 'admin-dashboard';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [selectedEquipment, setSelectedEquipment] = useState<string | null>(null);

  const navigateTo = (page: Page, equipmentId?: string) => {
    if (equipmentId) {
      setSelectedEquipment(equipmentId);
    }
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onNavigate={navigateTo} />;
      case 'client-dashboard':
        return <ClientDashboard onNavigate={navigateTo} />;
      case 'vendor-dashboard':
        return <VendorDashboard onNavigate={navigateTo} />;
      case 'equipment-listing':
        return <EquipmentListing onNavigate={navigateTo} />;
      case 'equipment-details':
        return <EquipmentDetails equipmentId={selectedEquipment} onNavigate={navigateTo} />;
      case 'rental-workflow':
        return <RentalWorkflow equipmentId={selectedEquipment} onNavigate={navigateTo} />;
      case 'admin-dashboard':
        return <AdminDashboard onNavigate={navigateTo} />;
      default:
        return <LandingPage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {renderPage()}
    </div>
  );
}
