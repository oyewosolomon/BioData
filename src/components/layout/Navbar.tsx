import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  LineChart,
  Users,
  Building2,
  Calendar,
  Lock,
  MessageSquare,
} from 'lucide-react';

// Define types for dropdown items
type DropdownItem = {
  icon: React.ComponentType<{ className?: string }>; 
  title: string;
  description: string;
};

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features: DropdownItem[] = [
    { 
      icon: LineChart, 
      title: 'Analytics Dashboard', 
      description: 'Real-time space utilization insights' 
    },
    { 
      icon: Users, 
      title: 'Occupancy Tracking', 
      description: 'Monitor space usage patterns' 
    },
    { 
      icon: Building2, 
      title: 'Space Management', 
      description: 'Optimize office layouts' 
    }
  ];

  const solutions: DropdownItem[] = [
    { 
      icon: Calendar, 
      title: 'Desk Booking', 
      description: 'Flexible workspace scheduling' 
    },
    { 
      icon: Lock, 
      title: 'Access Control', 
      description: 'Secure space management' 
    },
    { 
      icon: MessageSquare, 
      title: 'Team Coordination', 
      description: 'Streamline workplace communication' 
    }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className={`fixed top-0 w-full ${isScrolled ? 'bg-white/90 shadow-sm' : 'bg-white/80'} backdrop-blur-md z-50 py-4`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-600 justify-center items-center mx-auto flex rounded-lg">
            <svg width="30px" height="30px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="48" height="48" fill="white" fill-opacity="0.01"></rect> <path d="M19 44V22C19 18.6863 21.6863 16 25 16C28.3137 16 31 18.6863 31 22V44" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M13 44V22C13 15.3726 18.3726 10 25 10C31.6274 10 37 15.3726 37 22V44" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7 44V22C7 12.0589 15.0589 4 25 4C34.9411 4 43 12.0589 43 22V44" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M25 44V22" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          </div>
          <span className="text-xl font-bold text-gray-900">BioData Systems</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
          <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
          <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Testimonials</a>
          <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact us</a>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="md:hidden text-gray-600 hover:text-blue-600">
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md mt-4 py-4">
          <div className="container mx-auto px-6">
            <a href="#features" className="block py-2 text-gray-600 hover:text-blue-600">Features</a>
            <a href="#pricing" className="block py-2 text-gray-600 hover:text-blue-600">Pricing</a>
            <a href="#testimonials" className="block py-2 text-gray-600 hover:text-blue-600">Testimonials</a>
            <a href="#about" className="block py-2 text-gray-600 hover:text-blue-600">About</a>
            <a href="#contact" className="block py-2 text-gray-600 hover:text-blue-600">Contact us</a>
            <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg mt-4 hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;