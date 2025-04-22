import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, LayoutDashboard, Wallet, LineChart, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50';
  };

  return (
    <nav className="glass-card sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 hover-scale">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold gradient-text">DeFi Safe Pool</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            <Link 
              to="/dashboard" 
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${isActive('/dashboard')}`}
            >
              <LayoutDashboard className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <Link 
              to="/investments" 
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${isActive('/investments')}`}
            >
              <Wallet className="h-5 w-5" />
              <span>Investments</span>
            </Link>
            <Link 
              to="/risk-analysis" 
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${isActive('/risk-analysis')}`}
            >
              <LineChart className="h-5 w-5" />
              <span>Risk Analysis</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1">
              Connect Wallet
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link 
              to="/dashboard" 
              className={`flex items-center space-x-2 px-4 py-3 rounded-lg ${isActive('/dashboard')}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <LayoutDashboard className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <Link 
              to="/investments" 
              className={`flex items-center space-x-2 px-4 py-3 rounded-lg ${isActive('/investments')}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Wallet className="h-5 w-5" />
              <span>Investments</span>
            </Link>
            <Link 
              to="/risk-analysis" 
              className={`flex items-center space-x-2 px-4 py-3 rounded-lg ${isActive('/risk-analysis')}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <LineChart className="h-5 w-5" />
              <span>Risk Analysis</span>
            </Link>
            <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg">
              Connect Wallet
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;