import React, { useState } from 'react';
import { LayoutDashboard, Users, Package, DollarSign, FileCheck, BarChart3, Settings, Shield, TrendingUp, TrendingDown, AlertCircle } from 'lucide-react';

interface AdminDashboardProps {
  onNavigate: (page: 'landing' | 'client-dashboard' | 'vendor-dashboard' | 'equipment-listing' | 'equipment-details' | 'rental-workflow' | 'admin-dashboard') => void;
}

export default function AdminDashboard({ onNavigate }: AdminDashboardProps) {
  const [activeMenu, setActiveMenu] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard },
    { id: 'vendors', name: 'Vendors', icon: Users },
    { id: 'rentals', name: 'Rentals', icon: Package },
    { id: 'payments', name: 'Payments', icon: DollarSign },
    { id: 'verification', name: 'Verification', icon: FileCheck },
    { id: 'analytics', name: 'Analytics', icon: BarChart3 },
    { id: 'settings', name: 'Settings', icon: Settings },
  ];

  const stats = [
    {
      label: 'Total Vendors',
      value: '248',
      change: '+12%',
      trend: 'up',
      icon: Users,
      color: 'bg-blue-50 text-blue-600'
    },
    {
      label: 'Active Rentals',
      value: '1,432',
      change: '+8%',
      trend: 'up',
      icon: Package,
      color: 'bg-green-50 text-green-600'
    },
    {
      label: 'Monthly Revenue',
      value: '$2.4M',
      change: '+15%',
      trend: 'up',
      icon: DollarSign,
      color: 'bg-purple-50 text-purple-600'
    },
    {
      label: 'Pending Verifications',
      value: '23',
      change: '-5%',
      trend: 'down',
      icon: FileCheck,
      color: 'bg-yellow-50 text-yellow-600'
    },
  ];

  const recentVendors = [
    {
      id: 'V-001',
      name: 'Atlas Equipment Ltd',
      status: 'Pending Verification',
      dateJoined: '2024-11-25',
      equipment: 45,
      revenue: '$125K'
    },
    {
      id: 'V-002',
      name: 'Delta Oil Services',
      status: 'Verified',
      dateJoined: '2024-11-20',
      equipment: 78,
      revenue: '$298K'
    },
    {
      id: 'V-003',
      name: 'Omega Drilling Co.',
      status: 'Under Review',
      dateJoined: '2024-11-18',
      equipment: 23,
      revenue: '$87K'
    },
  ];

  const recentRentals = [
    {
      id: 'RNT-1024',
      equipment: 'Wireline Tools Complete Kit',
      client: 'Shell Nigeria',
      vendor: 'Schlumberger',
      status: 'Active',
      value: '$45,000',
      startDate: '2024-11-20'
    },
    {
      id: 'RNT-1023',
      equipment: 'Centrifugal Pump 500HP',
      client: 'Total E&P',
      vendor: 'Halliburton',
      status: 'Active',
      value: '$32,000',
      startDate: '2024-11-18'
    },
    {
      id: 'RNT-1022',
      equipment: 'Wellhead Equipment API 6A',
      client: 'Chevron',
      vendor: 'Baker Hughes',
      status: 'Completed',
      value: '$78,000',
      startDate: '2024-11-10'
    },
  ];

  const verificationQueue = [
    {
      id: 'VER-045',
      vendorName: 'Apex Drilling Services',
      type: 'Business License',
      submittedDate: '2024-11-27',
      priority: 'High'
    },
    {
      id: 'VER-044',
      vendorName: 'Prime Equipment Co.',
      type: 'Insurance Certificate',
      submittedDate: '2024-11-26',
      priority: 'Medium'
    },
    {
      id: 'VER-043',
      vendorName: 'Summit Oil Tools',
      type: 'Tax Registration',
      submittedDate: '2024-11-25',
      priority: 'High'
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Verified':
        return 'bg-green-100 text-green-800';
      case 'Pending Verification':
        return 'bg-yellow-100 text-yellow-800';
      case 'Under Review':
        return 'bg-blue-100 text-blue-800';
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Completed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Low':
        return 'bg-blue-100 text-blue-800';
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
            <div>
              <span className="text-gray-900 block">NEXUS</span>
              <span className="text-gray-500">Admin Panel</span>
            </div>
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
              <h1 className="text-2xl text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600">Monitor and manage the entire platform</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-gray-600 hover:text-gray-900">
                <AlertCircle size={24} />
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
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${stat.color}`}>
                    <stat.icon size={24} />
                  </div>
                  <div className={`flex items-center gap-1 ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                    <span>{stat.change}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-1">{stat.label}</p>
                <p className="text-3xl text-gray-900">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Recent Vendors */}
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl text-gray-900">Recent Vendors</h2>
                  <button className="text-blue-600 hover:text-blue-700">View All</button>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                {recentVendors.map((vendor) => (
                  <div key={vendor.id} className="p-6 hover:bg-gray-50">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-gray-900 mb-1">{vendor.name}</h3>
                        <p className="text-gray-600">{vendor.id}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs ${getStatusBadge(vendor.status)}`}>
                        {vendor.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-gray-600">Equipment</p>
                        <p className="text-gray-900">{vendor.equipment}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Revenue</p>
                        <p className="text-gray-900">{vendor.revenue}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Joined</p>
                        <p className="text-gray-900">{vendor.dateJoined}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Verification Queue */}
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="p-6 border-b border-gray-200 flex items-center gap-2">
                <Shield className="text-blue-600" size={24} />
                <h2 className="text-xl text-gray-900">Verification Center</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {verificationQueue.map((item) => (
                  <div key={item.id} className="p-6 hover:bg-gray-50">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-gray-900 mb-1">{item.vendorName}</h3>
                        <p className="text-gray-600">{item.type}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs ${getPriorityBadge(item.priority)}`}>
                        {item.priority}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Submitted: {item.submittedDate}</span>
                      <div className="flex gap-2">
                        <button className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700">
                          Approve
                        </button>
                        <button className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700">
                          Reject
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Rentals */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl text-gray-900">Recent Rental Transactions</h2>
                <button className="text-blue-600 hover:text-blue-700">View All</button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-gray-700">Rental ID</th>
                    <th className="px-6 py-3 text-left text-gray-700">Equipment</th>
                    <th className="px-6 py-3 text-left text-gray-700">Client</th>
                    <th className="px-6 py-3 text-left text-gray-700">Vendor</th>
                    <th className="px-6 py-3 text-left text-gray-700">Status</th>
                    <th className="px-6 py-3 text-left text-gray-700">Value</th>
                    <th className="px-6 py-3 text-left text-gray-700">Start Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {recentRentals.map((rental) => (
                    <tr key={rental.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-gray-900">{rental.id}</td>
                      <td className="px-6 py-4 text-gray-900">{rental.equipment}</td>
                      <td className="px-6 py-4 text-gray-700">{rental.client}</td>
                      <td className="px-6 py-4 text-gray-700">{rental.vendor}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs ${getStatusBadge(rental.status)}`}>
                          {rental.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-900">{rental.value}</td>
                      <td className="px-6 py-4 text-gray-700">{rental.startDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white">
              <h3 className="text-xl mb-2">Generate Reports</h3>
              <p className="text-blue-100 mb-4">Create comprehensive platform analytics</p>
              <button className="px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50">
                Generate Report
              </button>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-6 text-white">
              <h3 className="text-xl mb-2">Vendor Management</h3>
              <p className="text-green-100 mb-4">Manage vendor accounts and verification</p>
              <button className="px-4 py-2 bg-white text-green-600 rounded-lg hover:bg-green-50">
                Manage Vendors
              </button>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-6 text-white">
              <h3 className="text-xl mb-2">Platform Settings</h3>
              <p className="text-purple-100 mb-4">Configure platform-wide settings</p>
              <button className="px-4 py-2 bg-white text-purple-600 rounded-lg hover:bg-purple-50">
                Open Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
