import React, { useState } from 'react';
import { ChevronLeft, Star, MapPin, CheckCircle, Calendar, FileText, Shield, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface EquipmentDetailsProps {
  equipmentId: string | null;
  onNavigate: (page: 'landing' | 'client-dashboard' | 'vendor-dashboard' | 'equipment-listing' | 'equipment-details' | 'rental-workflow' | 'admin-dashboard', equipmentId?: string) => void;
}

export default function EquipmentDetails({ equipmentId, onNavigate }: EquipmentDetailsProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock equipment data
  const equipment = {
    id: 'EQ-001',
    name: 'Wireline Tools - T-Series Complete Kit',
    category: 'Wireline Tools',
    description: 'Professional wireline tools complete kit suitable for deep well operations. Includes all necessary components for safe and efficient wireline operations in oil and gas fields.',
    vendor: {
      name: 'Schlumberger',
      rating: 4.8,
      reviews: 156,
      verified: true,
      yearsInBusiness: 15,
      totalEquipment: 234
    },
    pricing: {
      perDay: '$1,250',
      perWeek: '$7,500',
      perMonth: '$28,000',
    },
    location: 'Lagos, Nigeria',
    availability: 'Available',
    images: [
      'https://images.unsplash.com/photo-1609373235983-bef55d06268d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWxmaWVsZCUyMGVxdWlwbWVudCUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzY0MzIzMTY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1750515742085-f2eb9ecd6742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjByaWclMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzY0MzIzMTY3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1760009436767-d154e930e55c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmlsbGluZyUyMHRvb2xzJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NjQzMjMxNjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    specifications: [
      { label: 'Weight Capacity', value: '50,000 lbs' },
      { label: 'Operating Temperature', value: '-20°C to 150°C' },
      { label: 'Max Depth', value: '30,000 ft' },
      { label: 'Pressure Rating', value: '15,000 PSI' },
      { label: 'Material', value: 'High-grade Steel' },
      { label: 'Certification', value: 'API 7G, ISO 9001' },
    ],
    features: [
      'Complete wireline tool set',
      'Maintenance records included',
      'Technical support available',
      'Delivery and setup included',
      'Insurance coverage available',
      '24/7 emergency support',
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => onNavigate('equipment-listing')}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <ChevronLeft size={24} />
              </button>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white">N</span>
                </div>
                <span className="text-gray-900">NEXUS</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => onNavigate('client-dashboard')}
                className="px-4 py-2 text-gray-700 hover:text-gray-900"
              >
                Dashboard
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images and Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="relative h-96 bg-gray-200">
                <ImageWithFallback
                  src={equipment.images[selectedImage]}
                  alt={equipment.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-green-500 text-white rounded-full">
                  {equipment.availability}
                </div>
              </div>
              <div className="p-4 grid grid-cols-4 gap-3">
                {equipment.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative h-20 rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? 'border-blue-600' : 'border-gray-200'
                    }`}
                  >
                    <ImageWithFallback
                      src={image}
                      alt={`View ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Equipment Details */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-2xl text-gray-900 mb-4">Equipment Details</h2>
              <p className="text-gray-700 mb-6">{equipment.description}</p>

              {/* Specifications */}
              <h3 className="text-xl text-gray-900 mb-4">Specifications</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {equipment.specifications.map((spec, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <p className="text-gray-600 mb-1">{spec.label}</p>
                    <p className="text-gray-900">{spec.value}</p>
                  </div>
                ))}
              </div>

              {/* Features */}
              <h3 className="text-xl text-gray-900 mb-4">Features & Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {equipment.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Vendor Profile */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-2xl text-gray-900 mb-4">Vendor Profile</h2>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">S</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl text-gray-900">{equipment.vendor.name}</h3>
                    {equipment.vendor.verified && (
                      <Shield className="text-blue-600" size={20} />
                    )}
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="text-yellow-400 fill-yellow-400" size={16} />
                    <span className="text-gray-900">{equipment.vendor.rating}</span>
                    <span className="text-gray-600">({equipment.vendor.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin size={16} />
                    <span>{equipment.location}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-2xl text-gray-900 mb-1">{equipment.vendor.yearsInBusiness}</p>
                  <p className="text-gray-600">Years</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-2xl text-gray-900 mb-1">{equipment.vendor.totalEquipment}</p>
                  <p className="text-gray-600">Equipment</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-2xl text-gray-900 mb-1">{equipment.vendor.reviews}</p>
                  <p className="text-gray-600">Reviews</p>
                </div>
              </div>

              <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                View Vendor Profile
              </button>
            </div>
          </div>

          {/* Right Column - Pricing and Actions */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-24">
              <h2 className="text-2xl text-gray-900 mb-6">Pricing</h2>
              
              {/* Pricing Breakdown */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-600 cursor-pointer">
                  <div>
                    <p className="text-gray-700">Per Day</p>
                    <p className="text-2xl text-gray-900">{equipment.pricing.perDay}</p>
                  </div>
                  <input type="radio" name="pricing" className="w-4 h-4" />
                </div>
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-600 cursor-pointer">
                  <div>
                    <p className="text-gray-700">Per Week</p>
                    <p className="text-2xl text-gray-900">{equipment.pricing.perWeek}</p>
                    <p className="text-green-600">Save 10%</p>
                  </div>
                  <input type="radio" name="pricing" className="w-4 h-4" />
                </div>
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-600 cursor-pointer">
                  <div>
                    <p className="text-gray-700">Per Month</p>
                    <p className="text-2xl text-gray-900">{equipment.pricing.perMonth}</p>
                    <p className="text-green-600">Save 20%</p>
                  </div>
                  <input type="radio" name="pricing" className="w-4 h-4" />
                </div>
              </div>

              {/* Availability Calendar */}
              <div className="mb-6">
                <h3 className="text-gray-900 mb-3 flex items-center gap-2">
                  <Calendar size={20} />
                  Availability Calendar
                </h3>
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="text-center mb-4">
                    <p className="text-gray-900">November 2024</p>
                  </div>
                  <div className="grid grid-cols-7 gap-2 text-center text-gray-600 mb-2">
                    <div>Su</div>
                    <div>Mo</div>
                    <div>Tu</div>
                    <div>We</div>
                    <div>Th</div>
                    <div>Fr</div>
                    <div>Sa</div>
                  </div>
                  <div className="grid grid-cols-7 gap-2 text-center">
                    {[...Array(30)].map((_, i) => (
                      <div
                        key={i}
                        className={`p-2 rounded ${
                          i % 7 === 0 || i % 7 === 6 ? 'bg-gray-100' : 'bg-green-50 hover:bg-green-100 cursor-pointer'
                        }`}
                      >
                        {i + 1}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => onNavigate('rental-workflow', equipmentId || 'EQ-001')}
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mb-4"
              >
                Request Rental
              </button>

              <button className="w-full px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 mb-6">
                Contact Vendor
              </button>

              {/* Additional Info */}
              <div className="space-y-3 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-3 text-gray-700">
                  <Shield className="text-blue-600" size={20} />
                  <span>Verified & Insured</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <FileText className="text-blue-600" size={20} />
                  <span>Documentation Included</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Award className="text-blue-600" size={20} />
                  <span>Quality Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
