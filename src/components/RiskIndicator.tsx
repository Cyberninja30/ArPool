import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface RiskIndicatorProps {
  currentValue: number;
  thresholds: {
    safe: number;
    yellow: number;
    red: number;
    violet: number;
  };
}

export const RiskIndicator: React.FC<RiskIndicatorProps> = ({ currentValue, thresholds }) => {
  const getRiskColor = () => {
    if (currentValue >= thresholds.safe) return 'bg-green-500';
    if (currentValue >= thresholds.yellow) return 'bg-yellow-500';
    if (currentValue >= thresholds.red) return 'bg-red-500';
    return 'bg-violet-500';
  };

  const getRiskText = () => {
    if (currentValue >= thresholds.safe) return 'Safe';
    if (currentValue >= thresholds.yellow) return 'Warning';
    if (currentValue >= thresholds.red) return 'Danger';
    return 'Critical';
  };

  return (
    <div className="flex items-center space-x-2 p-4 rounded-lg bg-white shadow-md">
      <div className={`w-4 h-4 rounded-full ${getRiskColor()}`} />
      <span className="font-semibold">{getRiskText()}</span>
      {currentValue < thresholds.yellow && (
        <AlertTriangle className="text-yellow-500 ml-2" />
      )}
    </div>
  );
};