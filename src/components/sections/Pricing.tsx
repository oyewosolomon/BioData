import React, { useState } from 'react';
import { Check, HelpCircle, ArrowRight } from 'lucide-react';

interface Plan {
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  features: string[];
  highlight: boolean;
}

interface Feature {
  name: string;
  description: string;
  starter: string | boolean;
  professional: string | boolean;
  enterprise: string | boolean;
}

interface FeatureCategory {
  category: string;
  features: Feature[];
}

const PricingSection: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState<boolean>(true);
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  const plans: Plan[] = [
    {
      name: "Starter",
      description: "Perfect for small research teams and pilot studies",
      monthlyPrice: 999,
      annualPrice: 899,
      features: [
        "Up to 5 concurrent trials",
        "Basic data management",
        "Standard compliance tools",
        "Email support",
        "10 team members"
      ],
      highlight: false
    },
    {
      name: "Professional",
      description: "Ideal for growing research organizations",
      monthlyPrice: 1999,
      annualPrice: 1799,
      features: [
        "Up to 20 concurrent trials",
        "Advanced data management",
        "Full compliance suite",
        "24/7 priority support",
        "50 team members",
        "Custom workflows",
        "API access"
      ],
      highlight: true
    },
    {
      name: "Enterprise",
      description: "For large-scale pharmaceutical companies",
      monthlyPrice: 4999,
      annualPrice: 4499,
      features: [
        "Unlimited concurrent trials",
        "Enterprise data management",
        "Custom compliance tools",
        "Dedicated support team",
        "Unlimited team members",
        "Custom integration",
        "White labeling",
        "On-premise deployment"
      ],
      highlight: false
    }
  ];

  const featureComparison: FeatureCategory[] = [
    {
      category: "Data Management",
      features: [
        {
          name: "Data Entry Automation",
          description: "Automated data capture and validation systems",
          starter: "Basic",
          professional: "Advanced",
          enterprise: "Custom"
        },
        {
          name: "Error Detection",
          description: "AI-powered error detection and correction",
          starter: "Standard",
          professional: "Enhanced",
          enterprise: "Premium"
        },
        {
          name: "Data Storage",
          description: "Secure cloud storage for trial data",
          starter: "100GB",
          professional: "1TB",
          enterprise: "Unlimited"
        }
      ]
    },
    {
      category: "Compliance",
      features: [
        {
          name: "Regulatory Tools",
          description: "Built-in compliance checking tools",
          starter: "Basic",
          professional: "Advanced",
          enterprise: "Custom"
        },
        {
          name: "Audit Trail",
          description: "Detailed audit logging and tracking",
          starter: true,
          professional: true,
          enterprise: true
        },
        {
          name: "Validation Suite",
          description: "System and data validation tools",
          starter: false,
          professional: true,
          enterprise: true
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white" id='pricing'>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Transparent Pricing for Every Scale
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your research needs. All plans include our core
            features with varying levels of capability and support.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-lg ${!isAnnual ? 'text-blue-600 font-semibold' : 'text-gray-600'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-16 h-8 bg-blue-600 rounded-full transition-colors"
            >
              <div
                className={`absolute w-6 h-6 bg-white rounded-full top-1 transition-transform ${
                  isAnnual ? 'left-9' : 'left-1'
                }`}
              />
            </button>
            <span className={`text-lg ${isAnnual ? 'text-blue-600 font-semibold' : 'text-gray-600'}`}>
              Annual (10% off)
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl p-8 transition-all duration-300 transform hover:scale-105 ${
                plan.highlight
                  ? 'bg-blue-600 text-white shadow-xl'
                  : 'bg-gray-50 text-gray-900'
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={`mb-6 ${plan.highlight ? 'text-blue-100' : 'text-gray-600'}`}>
                {plan.description}
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold">
                  ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                </span>
                <span className={plan.highlight ? 'text-blue-100' : 'text-gray-600'}>
                  /month
                </span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <Check className={`w-5 h-5 ${plan.highlight ? 'text-blue-200' : 'text-blue-600'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg transition-colors ${
                  plan.highlight
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Feature Comparison */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-8">Feature Comparison</h3>
          <div className="space-y-8">
            {featureComparison.map((category, index) => (
              <div key={index}>
                <h4 className="text-xl font-semibold mb-4">{category.category}</h4>
                <div className="space-y-4">
                  {category.features.map((feature, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-4 gap-4 items-center py-3 border-b border-gray-200"
                      onMouseEnter={() => setActiveFeature(feature.name)}
                      onMouseLeave={() => setActiveFeature(null)}
                    >
                      <div className="relative">
                        <div className="flex items-center space-x-2">
                          <span>{feature.name}</span>
                          <HelpCircle className="w-4 h-4 text-gray-400" />
                        </div>
                        {activeFeature === feature.name && (
                          <div className="absolute top-full left-0 mt-2 p-3 bg-white rounded-lg shadow-lg z-10 w-64">
                            {feature.description}
                          </div>
                        )}
                      </div>
                      <div className="text-center">
                        {typeof feature.starter === 'boolean' ? (
                          feature.starter ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <span className="text-gray-400">-</span>
                          )
                        ) : (
                          feature.starter
                        )}
                      </div>
                      <div className="text-center">
                        {typeof feature.professional === 'boolean' ? (
                          feature.professional ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <span className="text-gray-400">-</span>
                          )
                        ) : (
                          feature.professional
                        )}
                      </div>
                      <div className="text-center">
                        {typeof feature.enterprise === 'boolean' ? (
                          feature.enterprise ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <span className="text-gray-400">-</span>
                          )
                        ) : (
                          feature.enterprise
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="text-gray-600 mb-8">
            Contact our team to create a tailored plan for your specific requirements.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg inline-flex items-center space-x-2 hover:bg-blue-700 transition-colors">
            <span>Contact Sales</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;