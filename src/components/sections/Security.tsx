import React, { useState } from 'react';
import {
  Shield, Lock, Key, FileCheck,
  Server, Database, RefreshCw, Eye
} from 'lucide-react';

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
  details: string[];
}

interface Features {
  security: Feature[];
  compliance: Feature[];
}

const SecuritySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'security' | 'compliance'>('security');

  const features: Features = {
    security: [
      {
        icon: <Lock className="w-8 h-8" />,
        title: "End-to-End Encryption",
        description: "AES-256 bit encryption for all data in transit and at rest",
        details: [
          "SSL/TLS encryption for all data transfers",
          "Encrypted database backups",
          "Secure key management",
          "Regular security audits"
        ]
      },
      {
        icon: <Server className="w-8 h-8" />,
        title: "Secure Infrastructure",
        description: "Enterprise-grade security with redundant systems",
        details: [
          "SOC 2 Type II certified data centers",
          "24/7 infrastructure monitoring",
          "Automated threat detection",
          "Regular penetration testing"
        ]
      },
      {
        icon: <Key className="w-8 h-8" />,
        title: "Access Control",
        description: "Granular permissions and role-based access",
        details: [
          "Multi-factor authentication",
          "Single Sign-On (SSO)",
          "IP whitelisting",
          "Session management"
        ]
      },
      {
        icon: <Eye className="w-8 h-8" />,
        title: "Audit Logging",
        description: "Comprehensive activity tracking and monitoring",
        details: [
          "Detailed audit trails",
          "User activity monitoring",
          "System change logging",
          "Access attempt tracking"
        ]
      }
    ],
    compliance: [
      {
        icon: <Shield className="w-8 h-8" />,
        title: "HIPAA Compliance",
        description: "Full compliance with healthcare data regulations",
        details: [
          "PHI data protection",
          "Access controls",
          "Audit trails",
          "Breach notification protocols"
        ]
      },
      {
        icon: <Database className="w-8 h-8" />,
        title: "21 CFR Part 11",
        description: "FDA compliance for electronic systems",
        details: [
          "Electronic signatures",
          "System validations",
          "Documentation controls",
          "Record retention"
        ]
      },
      {
        icon: <FileCheck className="w-8 h-8" />,
        title: "GDPR Compliance",
        description: "European data protection standards",
        details: [
          "Data privacy controls",
          "User consent management",
          "Data portability",
          "Right to be forgotten"
        ]
      },
      {
        icon: <RefreshCw className="w-8 h-8" />,
        title: "Continuous Compliance",
        description: "Automated compliance monitoring and updates",
        details: [
          "Regular compliance audits",
          "Automated reporting",
          "Policy enforcement",
          "Regulatory updates"
        ]
      }
    ]
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Enterprise-Grade Security & Compliance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your clinical trial data is protected by industry-leading security measures
            and comprehensive compliance protocols.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-lg p-1 shadow">
            <button
              onClick={() => setActiveTab('security')}
              className={`px-6 py-2 rounded-md ${
                activeTab === 'security'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Security Features
            </button>
            <button
              onClick={() => setActiveTab('compliance')}
              className={`px-6 py-2 rounded-md ${
                activeTab === 'compliance'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Compliance Standards
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features[activeTab].map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-8">Trusted Security Certifications</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['HIPAA', 'SOC 2', 'ISO 27001', 'GDPR'].map((cert) => (
              <div key={cert} className="bg-white rounded-lg p-4 shadow flex items-center justify-center">
                <span className="text-gray-800 font-semibold">{cert} Certified</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;