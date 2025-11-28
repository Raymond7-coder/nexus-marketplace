import React, { useState } from 'react';
import { Search, SlidersHorizontal, Star, MapPin, ChevronLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface EquipmentListingProps {
  onNavigate: (page: 'landing' | 'client-dashboard' | 'vendor-dashboard' | 'equipment-listing' | 'equipment-details' | 'rental-workflow' | 'admin-dashboard', equipmentId?: string) => void;
}

export default function EquipmentListing({ onNavigate }: EquipmentListingProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [priceRange, setPriceRange] = useState('All');

  const categories = ['All', 'Wireline Tools', 'Fishing Tools', 'Wellhead Equipment', 'Pumps', 'Compressors'];
  const locations = ['All', 'Nigeria', 'Angola', 'Ghana', 'South Africa', 'Egypt'];
  const priceRanges = ['All', '$0-$500', '$500-$1000', '$1000-$2000', '$2000+'];

  const equipment = [
    {
      id: 'EQ-001',
      name: 'Wireline Tools - T-Series Complete Kit',
      category: 'Wireline Tools',
      vendor: 'Schlumberger',
      rating: 4.8,
      reviews: 24,
      price: '$1,250',
      period: 'day',
      location: 'Nigeria',
      availability: 'Available',
      showPrice: true,
      image: 'https://images.unsplash.com/photo-1609373235983-bef55d06268d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWxmaWVsZCUyMGVxdWlwbWVudCUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzY0MzIzMTY2fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 'EQ-002',
      name: 'Centrifugal Pump 500HP Industrial',
      category: 'Pumps',
      vendor: 'Halliburton',
      rating: 4.9,
      reviews: 18,
      price: '$890',
      period: 'day',
      location: 'Angola',
      availability: 'Available',
      showPrice: true,
      image: 'https://images.unsplash.com/photo-1760776066784-dfe3e7b45b3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcHVtcCUyMG1hY2hpbmVyeXxlbnwxfHx8fDE3NjQzMjMxNjd8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 'EQ-003',
      name: 'API 6A Wellhead Equipment Complete',
      category: 'Wellhead Equipment',
      vendor: 'Baker Hughes',
      rating: 4.7,
      reviews: 15,
      price: '$2,100',
      period: 'day',
      location: 'Nigeria',
      availability: 'Available',
      showPrice: false,
      image: 'https://images.unsplash.com/photo-1580668304124-945a763a7442?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsaGVhZCUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjQzMjMxNjd8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 'EQ-004',
      name: 'Fishing Tools Complete Set',
      category: 'Fishing Tools',
      vendor: 'Weatherford',
      rating: 4.6,
      reviews: 32,
      price: '$750',
      period: 'day',
      location: 'Ghana',
      availability: 'Available',
      showPrice: false,
      image: 'https://images.unsplash.com/photo-1760009436767-d154e930e55c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmlsbGluZyUyMHRvb2xzJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NjQzMjMxNjh8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 'EQ-005',
      name: 'Industrial Air Compressor 1000 CFM',
      category: 'Compressors',
      vendor: 'NOV',
      rating: 4.8,
      reviews: 21,
      price: '$1,450',
      period: 'day',
      location: 'South Africa',
      availability: 'Available',
      showPrice: false,
      image: 'https://images.unsplash.com/photo-1731397979689-b8ecfffd6025?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wcmVzc29yJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NjQzMjMxNjd8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 'EQ-006',
      name: 'Hydraulic Pump Unit - High Pressure',
      category: 'Pumps',
      vendor: 'Tenaris',
      rating: 4.9,
      reviews: 27,
      price: '$1,120',
      period: 'day',
      location: 'Egypt',
      availability: 'Available',
      showPrice: true,
      image: 'https://images.unsplash.com/photo-1750515742085-f2eb9ecd6742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjByaWclMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzY0MzIzMTY3fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
  ];

  const filteredEquipment = equipment.filter((item) => {
    if (selectedCategory !== 'All' && item.category !== selectedCategory) return false;
    if (selectedLocation !== 'All' && item.location !== selectedLocation) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => onNavigate('landing')}
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
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Search and Filter Bar */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1 flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-2">
              <Search className="text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search equipment..."
                className="flex-1 outline-none text-gray-900"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 outline-none"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            {/* Location Filter */}
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 outline-none"
            >
              {locations.map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>

            {/* Price Range */}
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 outline-none"
            >
              {priceRanges.map((range) => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>

            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 flex items-center gap-2">
              <SlidersHorizontal size={20} />
              More Filters
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-700">
            Showing <span className="text-gray-900">{filteredEquipment.length}</span> results
          </p>
          <select className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 outline-none">
            <option>Sort by: Relevance</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Rating: High to Low</option>
          </select>
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEquipment.map((item) => (
            <div
              key={item.id}
              onClick={() => onNavigate('equipment-details', item.id)}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="relative h-48 bg-gray-200">
                <ImageWithFallback
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 px-3 py-1 bg-green-500 text-white rounded-full">
                  {item.availability}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-gray-900 flex-1">{item.name}</h3>
                </div>
                <p className="text-gray-600 mb-3">{item.category}</p>
                
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="text-yellow-400 fill-yellow-400" size={16} />
                    <span className="text-gray-900">{item.rating}</span>
                  </div>
                  <span className="text-gray-500">({item.reviews} reviews)</span>
                </div>

                <div className="flex items-center gap-2 mb-4 text-gray-600">
                  <MapPin size={16} />
                  <span>{item.location}</span>
                  <span>•</span>
                  <span>{item.vendor}</span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  {item.showPrice ? (
                    <div>
                      <span className="text-2xl text-gray-900">{item.price}</span>
                      <span className="text-gray-600">/{item.period}</span>
                    </div>
                  ) : (
                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                      Request Price
                    </button>
                  )}
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
