import React, { useState, FormEvent, ChangeEvent } from 'react';
import {
  Twitter, Linkedin, Facebook, Instagram, Mail,
  ArrowRight, ExternalLink, Globe, Phone, MapPin
} from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
}

interface Office {
  city: string;
  address: string;
  phone: string;
}

const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [subscribed, setSubscribed] = useState<boolean>(false);

  const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail('');
  };

  const navigation: Record<string, NavigationItem[]> = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Solutions', href: '#solutions' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Case Studies', href: '#case-studies' },
      { name: 'Documentation', href: '#docs' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press', href: '#press' },
      { name: 'Partners', href: '#partners' },
      { name: 'Blog', href: '#blog' }
    ],
    support: [
      { name: 'Help Center', href: '#help' },
      { name: 'System Status', href: '#status' },
      { name: 'Training', href: '#training' },
      { name: 'Contact Us', href: '#contact' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Security', href: '#security' },
      { name: 'Compliance', href: '#compliance' },
      { name: 'GDPR', href: '#gdpr' }
    ]
  };



  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-lg">
              <svg width="30px" height="30px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="48" height="48" fill="white" fill-opacity="0.01"></rect> <path d="M19 44V22C19 18.6863 21.6863 16 25 16C28.3137 16 31 18.6863 31 22V44" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M13 44V22C13 15.3726 18.3726 10 25 10C31.6274 10 37 15.3726 37 22V44" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7 44V22C7 12.0589 15.0589 4 25 4C34.9411 4 43 12.0589 43 22V44" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M25 44V22" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          
              </div>
             
              <span className="text-xl font-bold">BioData Systems</span>
            </div>
            <p className="text-gray-400 mb-6">
              Transforming clinical trial management with advanced data solutions and 
              automated compliance tools.
            </p>
            <div className="flex space-x-4">
              <a href="#twitter" className="hover:text-blue-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#linkedin" className="hover:text-blue-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#facebook" className="hover:text-blue-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#instagram" className="hover:text-blue-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-3">
                {navigation.product.map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-3">
                {navigation.support.map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-3">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Get the latest updates on clinical trial management and industry insights.
            </p>
            {subscribed ? (
              <div className="text-green-400 flex items-center space-x-2">
                <span>Thanks for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 bg-gray-800 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-400"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} BioData Systems. All rights reserved.
            </div>
            <div className="flex items-center space-x-4 text-gray-400 text-sm">
              <Globe className="w-4 h-4" />
              <select className="bg-transparent border-none focus:outline-none">
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;