import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, TrendingUp, Lock, Zap, ArrowRight } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-32">
        <div className="text-center">
          <div className="mb-8 relative">
            <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 opacity-10 rounded-full"></div>
            <h1 className="text-6xl font-bold mb-6 gradient-text relative">
              ArPool
            </h1>
            <p className="text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Experience the future of automated DeFi investments with AI-powered risk management
            </p>
          </div>
          <div className="flex justify-center space-x-6">
            <Link
              to="/dashboard"
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              Launch App
              <ArrowRight className="inline-block ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="#features"
              className="px-8 py-4 glass-card rounded-xl text-blue-600 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1"
            >
              Explore Features
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-transparent backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            Next-Gen DeFi Management
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Shield className="w-12 h-12 text-blue-600" />}
              title="Smart Security"
              description="Multi-layered protection with AI-driven risk assessment and real-time monitoring."
            />
            <FeatureCard
              icon={<TrendingUp className="w-12 h-12 text-indigo-600" />}
              title="Yield Optimization"
              description="Advanced algorithms maximize returns while maintaining your risk preferences."
            />
            <FeatureCard
              icon={<Lock className="w-12 h-12 text-violet-600" />}
              title="Risk Shield"
              description="Automated safeguards with multiple threshold levels for maximum protection."
            />
            <FeatureCard
              icon={<Zap className="w-12 h-12 text-purple-600" />}
              title="Instant Analytics"
              description="Real-time insights and predictive analysis for informed decision-making."
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600"></div>
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your DeFi Strategy?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Join the future of automated DeFi investment management with our cutting-edge platform.
            </p>
            <Link
              to="/dashboard"
              className="group inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl hover:shadow-lg hover:shadow-black/20 transition-all duration-300 hover:-translate-y-1"
            >
              Get Started Now
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="glass-card p-8 rounded-xl hover-scale">
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-semibold mb-4 gradient-text">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default LandingPage;