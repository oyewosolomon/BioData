import React, { useState, useEffect } from 'react';
import { ArrowRight, Database, Shield, Clock, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
   

      {/* Hero Content */}
      <div className="container mx-auto px-6 pt-32 pb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Revolutionizing Clinical Trial Management
            </h1>
            <p className="text-xl text-gray-600">
              Streamline your clinical trials with our advanced platform. Reduce errors by 90% while ensuring complete regulatory compliance.
            </p>
            <div className="flex space-x-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-all transform hover:scale-105">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all">
                Schedule Demo
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">1000+</div>
                <div className="text-gray-600">Active Trials</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">90%</div>
                <div className="text-gray-600">Error Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-gray-600">Monitoring</div>
              </div>
            </div>
          </div>

          {/* Animated Feature Cards */}
          <div className={`grid gap-6 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Database className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Automated Data Management</h3>
              <p className="text-gray-600">Smart data entry and validation systems that minimize human error.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Regulatory Compliance</h3>
              <p className="text-gray-600">Built-in compliance checks and documentation for FDA requirements.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Clock className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-time Monitoring</h3>
              <p className="text-gray-600">24/7 patient monitoring and instant alerts for critical events.</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default Hero;