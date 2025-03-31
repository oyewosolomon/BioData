import React, { useState } from 'react';
import { Star, ArrowRight, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

const Testimonials = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      title: "Global Phase III Trial Management",
      company: "Leading Pharmaceutical Company",
      
      metrics: [
        { name: "Time Saved", before: 100, after: 25, unit: "hours/week" },
        { name: "Error Rate", before: 12, after: 1.2, unit: "%" },
        { name: "Compliance", before: 92, after: 100, unit: "%" },
        { name: "Cost Savings", before: 0, after: 45, unit: "%" }
      ],
      results: [
        "Managed 50,000+ patient records across 100 sites",
        "Reduced data entry time by 75%",
        "Achieved perfect compliance score",
        "45% reduction in operational costs"
      ],
      logo: "https://randomuser.me/api/portraits/men/50.jpg",
    },
    {
      title: "Adaptive Trial Design Implementation",
      company: "Biotech Research Institute",
      metrics: [
        { name: "Trial Duration", before: 24, after: 18, unit: "months" },
        { name: "Patient Retention", before: 85, after: 95, unit: "%" },
        { name: "Data Quality", before: 88, after: 99, unit: "%" },
        { name: "Protocol Deviations", before: 15, after: 2, unit: "%" }
      ],
      results: [
        "Shortened trial duration by 6 months",
        "Improved patient retention by 10%",
        "99% data quality achievement",
        "87% reduction in protocol deviations"
      ],
      logo: "https://randomuser.me/api/portraits/men/50.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
       

        {/* Case Studies */}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-12">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold">Success Stories</h3>
            <div className="flex space-x-2">
              <button 
                onClick={() => setActiveCase(prev => prev > 0 ? prev - 1 : caseStudies.length - 1)}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={() => setActiveCase(prev => (prev + 1) % caseStudies.length)}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
             
              <h4 className="text-xl font-semibold mb-2">{caseStudies[activeCase].title}</h4>
              <p className="text-gray-600 mb-6">{caseStudies[activeCase].company}</p>
              
              <div className="space-y-4">
                {caseStudies[activeCase].results.map((result, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <span>{result}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={caseStudies[activeCase].metrics}
                  layout="vertical"
                  margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
                >
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" />
                  <Tooltip />
                  <Bar dataKey="before" fill="#94a3b8" name="Before" />
                  <Bar dataKey="after" fill="#2563eb" name="After" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg inline-flex items-center space-x-2 hover:bg-blue-700 transition-colors">
            <span>Start Your Success Story</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;