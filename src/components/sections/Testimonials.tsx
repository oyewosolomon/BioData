import React, { useState } from 'react';
import { Star, ArrowRight, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

const Testimonials = () => {
  const [activeCase, setActiveCase] = useState(0);

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Clinical Research Director",
      company: "PharmaTech Global",
      image: "/api/placeholder/64/64",
      quote: "BioData Systems has transformed our clinical trial management. We've reduced our data processing time by 75% while maintaining perfect compliance records.",
      rating: 5
    },
    {
      name: "James Miller",
      role: "Head of Operations",
      company: "MedResearch Inc",
      image: "/api/placeholder/64/64",
      quote: "The automated patient monitoring system has been a game-changer. We can now track patient data in real-time and respond to adverse events immediately.",
      rating: 5
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Principal Investigator",
      company: "Clinical Innovations",
      image: "/api/placeholder/64/64",
      quote: "The intuitive interface and powerful analytics have made managing multi-site trials effortless. Our team adopted the system with minimal training.",
      rating: 5
    }
  ];

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
      logo: "/api/placeholder/120/60"
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
      logo: "/api/placeholder/120/60"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leading Research Organizations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how top pharmaceutical companies and research institutions are transforming
            their clinical trials with BioData Systems.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center space-x-2 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                ))}
              </div>
              <Quote className="w-10 h-10 text-blue-200 mb-4" />
              <p className="text-gray-600 italic mb-6">{testimonial.quote}</p>
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

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
              <img 
                src={caseStudies[activeCase].logo} 
                alt={caseStudies[activeCase].company}
                className="mb-6"
              />
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