import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Check, Calendar, Upload, FileText, CreditCard } from 'lucide-react';

interface RentalWorkflowProps {
  equipmentId: string | null;
  onNavigate: (page: 'landing' | 'client-dashboard' | 'vendor-dashboard' | 'equipment-listing' | 'equipment-details' | 'rental-workflow' | 'admin-dashboard') => void;
}

export default function RentalWorkflow({ equipmentId, onNavigate }: RentalWorkflowProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    startDate: '',
    endDate: '',
    rentalPeriod: 'daily',
    deliveryAddress: '',
    documents: [] as File[],
    paymentMethod: '',
  });

  const steps = [
    { number: 1, title: 'Select Equipment', icon: Check },
    { number: 2, title: 'Choose Dates', icon: Calendar },
    { number: 3, title: 'Upload Documents', icon: Upload },
    { number: 4, title: 'Confirm Request', icon: FileText },
  ];

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit request
      onNavigate('client-dashboard');
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const equipment = {
    name: 'Wireline Tools - T-Series Complete Kit',
    vendor: 'Schlumberger',
    pricePerDay: 1250,
    pricePerWeek: 7500,
    pricePerMonth: 28000,
  };

  const calculateTotal = () => {
    if (!formData.startDate || !formData.endDate) return 0;
    
    const start = new Date(formData.startDate);
    const end = new Date(formData.endDate);
    const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    
    if (formData.rentalPeriod === 'daily') {
      return days * equipment.pricePerDay;
    } else if (formData.rentalPeriod === 'weekly') {
      const weeks = Math.ceil(days / 7);
      return weeks * equipment.pricePerWeek;
    } else {
      const months = Math.ceil(days / 30);
      return months * equipment.pricePerMonth;
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl text-gray-900">Equipment Selection</h2>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-24 h-24 bg-gray-200 rounded-lg flex-shrink-0"></div>
                <div className="flex-1">
                  <h3 className="text-xl text-gray-900 mb-2">{equipment.name}</h3>
                  <p className="text-gray-600 mb-3">Vendor: {equipment.vendor}</p>
                  <div className="flex gap-4">
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                      <p className="text-gray-600">Daily Rate</p>
                      <p className="text-xl text-gray-900">${equipment.pricePerDay}</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                      <p className="text-gray-600">Weekly Rate</p>
                      <p className="text-xl text-gray-900">${equipment.pricePerWeek}</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                      <p className="text-gray-600">Monthly Rate</p>
                      <p className="text-xl text-gray-900">${equipment.pricePerMonth}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800">✓ Equipment verified and available for rental</p>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl text-gray-900">Select Rental Period</h2>
            
            {/* Rental Period Type */}
            <div>
              <label className="block text-gray-700 mb-3">Rental Period Type</label>
              <div className="grid grid-cols-3 gap-4">
                <button
                  onClick={() => setFormData({ ...formData, rentalPeriod: 'daily' })}
                  className={`p-4 border-2 rounded-lg ${
                    formData.rentalPeriod === 'daily'
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <p className="text-gray-900">Daily</p>
                  <p className="text-gray-600">${equipment.pricePerDay}/day</p>
                </button>
                <button
                  onClick={() => setFormData({ ...formData, rentalPeriod: 'weekly' })}
                  className={`p-4 border-2 rounded-lg ${
                    formData.rentalPeriod === 'weekly'
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <p className="text-gray-900">Weekly</p>
                  <p className="text-gray-600">${equipment.pricePerWeek}/week</p>
                  <p className="text-green-600">Save 10%</p>
                </button>
                <button
                  onClick={() => setFormData({ ...formData, rentalPeriod: 'monthly' })}
                  className={`p-4 border-2 rounded-lg ${
                    formData.rentalPeriod === 'monthly'
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <p className="text-gray-900">Monthly</p>
                  <p className="text-gray-600">${equipment.pricePerMonth}/month</p>
                  <p className="text-green-600">Save 20%</p>
                </button>
              </div>
            </div>

            {/* Date Selection */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Start Date</label>
                <input
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-600"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">End Date</label>
                <input
                  type="date"
                  value={formData.endDate}
                  onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-600"
                />
              </div>
            </div>

            {/* Delivery Address */}
            <div>
              <label className="block text-gray-700 mb-2">Delivery Address</label>
              <textarea
                value={formData.deliveryAddress}
                onChange={(e) => setFormData({ ...formData, deliveryAddress: e.target.value })}
                placeholder="Enter full delivery address including city and state"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-600"
                rows={3}
              />
            </div>

            {formData.startDate && formData.endDate && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-800">Estimated Total: ${calculateTotal().toLocaleString()}</p>
              </div>
            )}
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl text-gray-900">Upload Required Documents</h2>
            <p className="text-gray-600">Please upload the following documents to complete your rental request</p>

            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-600 cursor-pointer">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-700 mb-1">Company Registration Certificate</p>
                <p className="text-gray-500">Click to upload or drag and drop</p>
              </div>

              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-600 cursor-pointer">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-700 mb-1">Tax Identification Number (TIN)</p>
                <p className="text-gray-500">Click to upload or drag and drop</p>
              </div>

              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-600 cursor-pointer">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-700 mb-1">Insurance Certificate (Optional)</p>
                <p className="text-gray-500">Click to upload or drag and drop</p>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-yellow-800">
                ℹ️ All documents will be reviewed by the vendor. Approval typically takes 24-48 hours.
              </p>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl text-gray-900">Confirm Your Request</h2>
            <p className="text-gray-600">Please review your rental request details before submitting</p>

            {/* Equipment Summary */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl text-gray-900 mb-4">Equipment Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Equipment</span>
                  <span className="text-gray-900">{equipment.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Vendor</span>
                  <span className="text-gray-900">{equipment.vendor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Rental Period</span>
                  <span className="text-gray-900">{formData.rentalPeriod}</span>
                </div>
              </div>
            </div>

            {/* Rental Period */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl text-gray-900 mb-4">Rental Period</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Start Date</span>
                  <span className="text-gray-900">{formData.startDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">End Date</span>
                  <span className="text-gray-900">{formData.endDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Address</span>
                  <span className="text-gray-900 text-right">{formData.deliveryAddress}</span>
                </div>
              </div>
            </div>

            {/* Pricing Breakdown */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl text-gray-900 mb-4">Pricing Breakdown</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Rental Cost</span>
                  <span className="text-gray-900">${calculateTotal().toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span className="text-gray-900">$500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Insurance (Optional)</span>
                  <span className="text-gray-900">$250</span>
                </div>
                <div className="flex justify-between pt-3 border-t border-gray-200">
                  <span className="text-gray-900">Total</span>
                  <span className="text-2xl text-gray-900">${(calculateTotal() + 750).toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl text-gray-900 mb-4">Payment Method</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-blue-600">
                  <input type="radio" name="payment" className="w-4 h-4" />
                  <CreditCard size={20} className="text-gray-600" />
                  <span className="text-gray-700">Credit/Debit Card</span>
                </label>
                <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-blue-600">
                  <input type="radio" name="payment" className="w-4 h-4" />
                  <CreditCard size={20} className="text-gray-600" />
                  <span className="text-gray-700">Bank Transfer</span>
                </label>
                <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-blue-600">
                  <input type="radio" name="payment" className="w-4 h-4" />
                  <CreditCard size={20} className="text-gray-600" />
                  <span className="text-gray-700">Pay on Delivery</span>
                </label>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800">
                ✓ By submitting this request, you agree to our Terms of Service and Rental Agreement
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => onNavigate('equipment-details')}
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
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                      currentStep > step.number
                        ? 'bg-green-600 text-white'
                        : currentStep === step.number
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {currentStep > step.number ? <Check size={24} /> : step.number}
                  </div>
                  <p className={`text-center ${currentStep >= step.number ? 'text-gray-900' : 'text-gray-500'}`}>
                    {step.title}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-1 mx-4 mt-6 ${
                      currentStep > step.number ? 'bg-green-600' : 'bg-gray-200'
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-lg border border-gray-200 p-8 mb-6">
          {renderStepContent()}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <button
            onClick={handleBack}
            disabled={currentStep === 1}
            className={`px-6 py-3 border border-gray-300 rounded-lg flex items-center gap-2 ${
              currentStep === 1
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <ChevronLeft size={20} />
            Back
          </button>
          <button
            onClick={handleNext}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
          >
            {currentStep === 4 ? 'Submit Request' : 'Continue'}
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
