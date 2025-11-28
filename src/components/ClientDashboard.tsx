import React, { useState } from 'react';
import { LayoutDashboard, Package, FileText, CreditCard, User, Bell, ChevronRight, Clock, CheckCircle, Truck, XCircle, Search } from 'lucide-react';

interface ClientDashboardProps {
  onNavigate: (page: 'landing' | 'client-dashboard' | 'vendor-dashboard' | 'equipment-listing' | 'equipment-details' | 'rental-workflow' | 'admin-dashboard') => void;
}

export default function ClientDashboard({ onNavigate }: ClientDashboardProps) {
  const [activeMenu, setActiveMenu] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard },
    { id: 'rentals', name: 'Rentals', icon: Package },
    { id: 'requests', name: 'Requests', icon: FileText },
    { id: 'documents', name: 'Documents', icon: FileText },
    { id: 'payments', name: 'Payments', icon: CreditCard },
    { id: 'profile', name: 'Profile', icon: User },
  ];

  const rentalRequests = [
    {
      id: 'REQ-001',
      equipment: 'Wireline Tools - Baker Hughes T-Series',
      vendor: 'Schlumberger',
      status: 'Pending',
      date: '2024-11-25',
      amount: '$1,250/day',
      statusColor: 'bg-yellow-100 text-yellow-800'
    },
    {
      id: 'REQ-002',
      equipment: 'Centrifugal Pump 500HP',
      vendor: 'Halliburton',
      status: 'Approved',
      date: '2024-11-22',
      amount: '$890/day',
      statusColor: 'bg-blue-100 text-blue-800'
    },
    {
      id: 'REQ-003',
      equipment: 'Wellhead Equipment - API 6A',
      vendor: 'Baker Hughes',
      status: 'In Transit',
      date: '2024-11-20',
      amount: '$2,100/day',
      statusColor: 'bg-purple-100 text-purple-800'
    },
    {
      id: 'REQ-004',
      equipment: 'Fishing Tools Kit',
      vendor: 'Weatherford',
      status: 'Completed',
      date: '2024-11-15',
      amount: '$750/day',
      statusColor: 'bg-green-100 text-green-800'
    },
  ];

  const notifications = [
    { id: 1, message: 'Your rental request REQ-002 has been approved', time: '2 hours ago', unread: true },
    { id: 2, message: 'Payment confirmation for REQ-003', time: '5 hours ago', unread: true },
    { id: 3, message: 'Equipment delivery scheduled for tomorrow', time: '1 day ago', unread: false },
    { id: 4, message: 'New vendor response on REQ-001', time: '2 days ago', unread: false },
  ];

  const stats = [
    { label: 'Active Rentals', value: '3', icon: Package, color: 'bg-blue-50 text-blue-600' },
    { label: 'Pending Requests', value: '1', icon: Clock, color: 'bg-yellow-50 text-yellow-600' },
    { label: 'Completed', value: '12', icon: CheckCircle, color: 'bg-green-50 text-green-600' },
    { label: 'Total Spent', value: '$45K', icon: CreditCard, color: 'bg-purple-50 text-purple-600' },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Pending': return Clock;
      case 'Approved': return CheckCircle;
      case 'In Transit': return Truck;
      case 'Completed': return CheckCircle;
      default: return Clock;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex-shrink-0">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white">N</span>
            </div>
            <span className="text-gray-900">NEXUS</span>
          </div>
          
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveMenu(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeMenu === item.id
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <item.icon size={20} />
                <span>{item.name}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="absolute bottom-0 w-64 p-6 border-t border-gray-200">
          <button 
            onClick={() => onNavigate('landing')}
            className="w-full px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl text-gray-900">Welcome back, John</h1>
              <p className="text-gray-600">Here's what's happening with your rentals today</p>
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => onNavigate('equipment-listing')}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Browse Equipment
              </button>
              <button className="relative p-2 text-gray-600 hover:text-gray-900">
                <Bell size={24} />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
            </div>
          </div>
        </header>

        <div className="p-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 mb-1">{stat.label}</p>
                    <p className="text-3xl text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.color}`}>
                    <stat.icon size={24} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Active Rental Requests */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl text-gray-900">Active Rental Requests</h2>
                    <button className="text-blue-600 hover:text-blue-700">View All</button>
                  </div>
                </div>
                <div className="divide-y divide-gray-200">
                  {rentalRequests.map((request) => {
                    const StatusIcon = getStatusIcon(request.status);
                    return (
                      <div key={request.id} className="p-6 hover:bg-gray-50 cursor-pointer">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-gray-900">{request.equipment}</h3>
                              <span className={`px-3 py-1 rounded-full text-xs ${request.statusColor}`}>
                                {request.status}
                              </span>
                            </div>
                            <p className="text-gray-600 mb-2">Vendor: {request.vendor}</p>
                            <div className="flex items-center gap-4 text-gray-500">
                              <span>ID: {request.id}</span>
                              <span>•</span>
                              <span>{request.date}</span>
                              <span>•</span>
                              <span>{request.amount}</span>
                            </div>
                          </div>
                          <StatusIcon className="text-gray-400" size={20} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Notifications Panel */}
            <div>
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl text-gray-900">Notifications</h2>
                </div>
                <div className="divide-y divide-gray-200">
                  {notifications.map((notification) => (
                    <div 
                      key={notification.id} 
                      className={`p-4 hover:bg-gray-50 cursor-pointer ${notification.unread ? 'bg-blue-50' : ''}`}
                    >
                      <div className="flex items-start gap-3">
                        {notification.unread && (
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                        )}
                        <div className="flex-1">
                          <p className="text-gray-900 mb-1">{notification.message}</p>
                          <p className="text-gray-500">{notification.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 border-t border-gray-200">
                  <button className="w-full text-center text-blue-600 hover:text-blue-700">
                    View All Notifications
                  </button>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-lg border border-gray-200 mt-6 p-6">
                <h3 className="text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button 
                    onClick={() => onNavigate('equipment-listing')}
                    className="w-full flex items-center justify-between px-4 py-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100"
                  >
                    <span>New Rental Request</span>
                    <ChevronRight size={20} />
                  </button>
                  <button className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100">
                    <span>View Documents</span>
                    <ChevronRight size={20} />
                  </button>
                  <button className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100">
                    <span>Payment History</span>
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
