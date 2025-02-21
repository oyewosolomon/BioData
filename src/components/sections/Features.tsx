import React, { useState } from 'react';
import { 
  Database, Shield, LineChart, Users, 
  Bell, FileCheck, Zap, Settings
} from 'lucide-react';
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const FeatureSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  // Sample data for the chart
  const chartData = [
    { name: 'Week 1', Traditional: 65, BioData: 90 },
    { name: 'Week 2', Traditional: 59, BioData: 88 },
    { name: 'Week 3', Traditional: 80, BioData: 95 },
    { name: 'Week 4', Traditional: 55, BioData: 92 },
    { name: 'Week 5', Traditional: 70, BioData: 94 },
  ];

  const features = [
    {
      title: "Data Management",
      icon: <Database className="w-6 h-6" />,
      description: "Automated data entry and validation with real-time error checking",
      details: [
        "90% reduction in data entry errors",
        "Automated data validation protocols",
        "Smart form completion assistance",
        "Real-time data quality monitoring"
      ]
    },
    {
      title: "Compliance Tools",
      icon: <Shield className="w-6 h-6" />,
      description: "Built-in regulatory compliance checks and documentation",
      details: [
        "FDA compliance automation",
        "Audit trail generation",
        "Electronic signature management",
        "Regulatory documentation templates"
      ]
    },
    {
      title: "Analytics Dashboard",
      icon: <LineChart className="w-6 h-6" />,
      description: "Comprehensive analytics and reporting system",
      details: [
        "Real-time trial progress tracking",
        "Patient enrollment analytics",
        "Site performance metrics",
        "Custom report generation"
      ]
    },
    {
      title: "Patient Monitoring",
      icon: <Users className="w-6 h-6" />,
      description: "24/7 automated patient monitoring and alerts",
      details: [
        "Continuous vital sign monitoring",
        "Adverse event detection",
        "Patient compliance tracking",
        "Automated follow-up scheduling"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Faster Trial Completion",
      description: "Reduce trial duration by up to 30% through automated processes"
    },
    {
      icon: <Bell className="w-8 h-8 text-red-500" />,
      title: "Real-time Alerts",
      description: "Instant notifications for critical events and patient status"
    },
    {
      icon: <FileCheck className="w-8 h-8 text-green-500" />,
      title: "Compliance Assurance",
      description: "100% compliance with regulatory requirements"
    },
    {
      icon: <Settings className="w-8 h-8 text-purple-500" />,
      title: "Customizable Workflows",
      description: "Adapt the system to your specific trial requirements"
    }
  ];

  return (
    <section className="py-20 bg-white" id='features'>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Clinical Trials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform streamlines every aspect of clinical trial management,
            from data collection to regulatory compliance.
          </p>
        </div>

        {/* Feature Tabs */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeTab === index 
                    ? 'bg-blue-50 border-2 border-blue-200' 
                    : 'bg-gray-50 hover:bg-blue-50'
                }`}
                onClick={() => setActiveTab(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-2 rounded-lg ${
                    activeTab === index ? 'bg-blue-600 text-white' : 'bg-gray-200'
                  }`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    {activeTab === index && (
                      <ul className="space-y-2">
                        {feature.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Demo Area */}
          <div className="bg-white rounded-xl shadow-xl p-6">
            <h3 className="text-2xl font-semibold mb-6">Performance Comparison</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsLineChart data={chartData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="Traditional" 
                    stroke="#94a3b8" 
                    strokeWidth={2}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="BioData" 
                    stroke="#2563eb" 
                    strokeWidth={2}
                  />
                </RechartsLineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;