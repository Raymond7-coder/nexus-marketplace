import React from 'react';
import { Search, Wrench, Anchor, Droplet, CircleDot, Wind, ChevronRight, Star, Shield, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LandingPageProps {
  onNavigate: (page: 'landing' | 'client-dashboard' | 'vendor-dashboard' | 'equipment-listing' | 'equipment-details' | 'rental-workflow' | 'admin-dashboard') => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  const categories = [
    { name: 'Wireline Tools', icon: Wrench, count: 234 },
    { name: 'Fishing Tools', icon: Anchor, count: 189 },
    { name: 'Wellhead Equipment', icon: CircleDot, count: 156 },
    { name: 'Pumps', icon: Droplet, count: 312 },
    { name: 'Compressors', icon: Wind, count: 198 },
  ];

  const vendors = [
    'Schlumberger', 'Halliburton', 'Baker Hughes', 'Weatherford', 'NOV', 'Tenaris'
  ];

  const features = [
    {
      icon: Shield,
      title: 'Verified Vendors',
      description: 'All vendors are verified and compliant with industry standards'
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Quick equipment delivery across Africa'
    },
    {
      icon: Star,
      title: 'Quality Assured',
      description: 'Premium quality equipment with maintenance records'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white">N</span>
            </div>
            <span className="text-gray-900">NEXUS</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">Equipment</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Vendors</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 text-gray-700 hover:text-gray-900">Sign In</button>
            <button 
              onClick={() => onNavigate('client-dashboard')}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white">
        <div className="absolute inset-0 opacity-10">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1609373235983-bef55d06268d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWxmaWVsZCUyMGVxdWlwbWVudCUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzY0MzIzMTY2fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Oilfield Equipment"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl mb-6">Africa's Premier Oilfield Equipment Rental Marketplace</h1>
            <p className="text-xl text-gray-300 mb-8">
              Connect with verified vendors across the continent. Rent premium oilfield equipment quickly and securely.
            </p>
            
            {/* Search Bar */}
            <div className="bg-white rounded-lg p-2 flex items-center gap-3 shadow-xl">
              <Search className="text-gray-400 ml-2" size={20} />
              <input
                type="text"
                placeholder="Search equipment, tools, or services..."
                className="flex-1 px-2 py-3 text-gray-900 outline-none"
              />
              <button 
                onClick={() => onNavigate('equipment-listing')}
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Search
              </button>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 mt-8">
              <button 
                onClick={() => onNavigate('equipment-listing')}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
              >
                Rent Equipment
                <ChevronRight size={20} />
              </button>
              <button 
                onClick={() => onNavigate('vendor-dashboard')}
                className="px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 flex items-center gap-2"
              >
                Register as Vendor
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl text-gray-900 mb-8">Browse by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => onNavigate('equipment-listing')}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-600 hover:shadow-lg transition-all group"
            >
              <category.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-gray-900 mb-2 group-hover:text-blue-600">{category.name}</h3>
              <p className="text-gray-500">{category.count} items</p>
            </button>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl text-gray-900 mb-12 text-center">Why Choose NEXUS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white rounded-lg p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Vendors Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl text-gray-900 mb-8 text-center">Trusted by Leading Vendors</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {vendors.map((vendor) => (
            <div key={vendor} className="bg-white border border-gray-200 rounded-lg p-6 flex items-center justify-center hover:shadow-md transition-shadow">
              <span className="text-gray-700">{vendor}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of companies using NEXUS for their oilfield equipment needs
          </p>
          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => onNavigate('client-dashboard')}
              className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100"
            >
              Sign Up as Client
            </button>
            <button 
              onClick={() => onNavigate('vendor-dashboard')}
              className="px-8 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 border border-blue-500"
            >
              Sign Up as Vendor
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white">N</span>
                </div>
                <span className="text-white">NEXUS</span>
              </div>
              <p className="text-gray-500">Africa's premier oilfield equipment rental marketplace</p>
            </div>
            <div>
              <h4 className="text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Compliance</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p>&copy; 2024 NEXUS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
