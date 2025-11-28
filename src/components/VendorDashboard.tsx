import React, { useState } from 'react';
import { LayoutDashboard, Package, FileText, DollarSign, ShieldCheck, Headphones, Plus, Eye, Edit, CheckCircle, XCircle, Clock, TrendingUp } from 'lucide-react';

interface VendorDashboardProps {
  onNavigate: (page: 'landing' | 'client-dashboard' | 'vendor-dashboard' | 'equipment-listing' | 'equipment-details' | 'rental-workflow' | 'admin-dashboard') => void;
}

export default function VendorDashboard({ onNavigate }: VendorDashboardProps) {
  const [activeMenu, setActiveMenu] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard },
    { id: 'inventory', name: 'Inventory', icon: Package },
    { id: 'requests', name: 'Requests', icon: FileText },
    { id: 'earnings', name: 'Earnings', icon: DollarSign },
    { id: 'verification', name: 'Verification', icon: ShieldCheck },
    { id: 'support', name: 'Support', icon: Headphones },
  ];

  const inventory = [
    {
      id: 'INV-001',
      name: 'Wireline Tools - T-Series Complete Kit',
      category: 'Wireline Tools',
      availability: 'Available',
      ratePerDay: '$1,250',
      ratePerWeek: '$7,500',
      status: 'active',
      totalRentals: 24
    },
    {
      id: 'INV-002',
      name: 'Centrifugal Pump 500HP',
      category: 'Pumps',
      availability: 'Rented',
      ratePerDay: '$890',
      ratePerWeek: '$5,340',
      status: 'rented',
      totalRentals: 18
    },
    {
      id: 'INV-003',
      name: 'API 6A Wellhead Equipment',
      category: 'Wellhead Equipment',
      availability: 'Available',
      ratePerDay: '$2,100',
      ratePerWeek: '$12,600',
      status: 'active',
      totalRentals: 15
    },
    {
      id: 'INV-004',
      name: 'Fishing Tools Complete Set',
      category: 'Fishing Tools',
      availability: 'Maintenance',
      ratePerDay: '$750',
      ratePerWeek: '$4,500',
      status: 'maintenance',
      totalRentals: 32
    },
  ];

  const earningsSummary = {
    thisMonth: '$45,280',
    lastMonth: '$38,950',
    thisYear: '$425,680',
    pending: '$12,500'
  };

  const recentRequests = [
    { id: 'REQ-105', client: 'Shell Nigeria', equipment: 'Wireline Tools', status: 'Pending', date: '2024-11-27' },
    { id: 'REQ-104', client: 'Total E&P', equipment: 'Centrifugal Pump', status: 'Approved', date: '2024-11-26' },
    { id: 'REQ-103', client: 'Chevron', equipment: 'Wellhead Equipment', status: 'Completed', date: '2024-11-25' },
  ];

  const stats = [
    { label: 'Total Equipment', value: '24', icon: Package, color: 'bg-blue-50 text-blue-600' },
    { label: 'Active Rentals', value: '8', icon: TrendingUp, color: 'bg-green-50 text-green-600' },
    { label: 'This Month', value: '$45K', icon: DollarSign, color: 'bg-purple-50 text-purple-600' },
    { label: 'Pending Requests', value: '3', icon: Clock, color: 'bg-yellow-50 text-yellow-600' },
  ];

  const getAvailabilityBadge = (availability: string) => {
    switch (availability) {
      case 'Available':
        return 'bg-green-100 text-green-800';
      case 'Rented':
        return 'bg-blue-100 text-blue-800';
      case 'Maintenance':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
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
              <h1 className="text-2xl text-gray-900">Vendor Dashboard</h1>
              <p className="text-gray-600">Manage your inventory and track earnings</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
                <Plus size={20} />
                Add Equipment
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
            {/* Inventory List */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl text-gray-900">Inventory Management</h2>
                    <button className="text-blue-600 hover:text-blue-700">View All</button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-6 py-3 text-left text-gray-700">Equipment</th>
                        <th className="px-6 py-3 text-left text-gray-700">Availability</th>
                        <th className="px-6 py-3 text-left text-gray-700">Rate/Day</th>
                        <th className="px-6 py-3 text-left text-gray-700">Rate/Week</th>
                        <th className="px-6 py-3 text-left text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {inventory.map((item) => (
                        <tr key={item.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4">
                            <div>
                              <p className="text-gray-900">{item.name}</p>
                              <p className="text-gray-500">{item.category}</p>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-xs ${getAvailabilityBadge(item.availability)}`}>
                              {item.availability}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-gray-900">{item.ratePerDay}</td>
                          <td className="px-6 py-4 text-gray-900">{item.ratePerWeek}</td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <button className="p-2 text-gray-600 hover:text-blue-600">
                                <Eye size={18} />
                              </button>
                              <button className="p-2 text-gray-600 hover:text-blue-600">
                                <Edit size={18} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Sidebar Content */}
            <div>
              {/* Earnings Summary */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                <h3 className="text-xl text-gray-900 mb-4">Earnings Summary</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                    <span className="text-gray-600">This Month</span>
                    <span className="text-2xl text-gray-900">{earningsSummary.thisMonth}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Last Month</span>
                    <span className="text-gray-900">{earningsSummary.lastMonth}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">This Year</span>
                    <span className="text-gray-900">{earningsSummary.thisYear}</span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-gray-600">Pending</span>
                    <span className="text-yellow-600">{earningsSummary.pending}</span>
                  </div>
                </div>
                <button className="w-full mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  View Full Report
                </button>
              </div>

              {/* Verification Status */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="text-green-600" size={24} />
                  <h3 className="text-xl text-gray-900">Verification Status</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Business License</span>
                    <CheckCircle className="text-green-600" size={20} />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Tax Registration</span>
                    <CheckCircle className="text-green-600" size={20} />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Insurance</span>
                    <CheckCircle className="text-green-600" size={20} />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Bank Details</span>
                    <CheckCircle className="text-green-600" size={20} />
                  </div>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <p className="text-green-800">✓ Fully Verified Vendor</p>
                </div>
              </div>

              {/* Recent Requests */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl text-gray-900 mb-4">Recent Requests</h3>
                <div className="space-y-3">
                  {recentRequests.map((request) => (
                    <div key={request.id} className="p-3 border border-gray-200 rounded-lg hover:border-blue-600 cursor-pointer">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-900">{request.id}</span>
                        <span className={`px-2 py-1 rounded text-xs ${
                          request.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                          request.status === 'Approved' ? 'bg-green-100 text-green-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {request.status}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-1">{request.client}</p>
                      <p className="text-gray-500">{request.equipment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
