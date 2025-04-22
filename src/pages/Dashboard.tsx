import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Wallet, TrendingUp } from 'lucide-react';
import { RiskIndicator } from '../components/RiskIndicator';
import type { Investment, PoolStats } from '../types';

const Dashboard: React.FC = () => {
  const [poolStats] = useState<PoolStats>({
    totalInvestment: 100000,
    averageInterestRate: 5.2,
    riskScore: 85,
    safeLineThreshold: 80,
    yellowLineThreshold: 60,
    redLineThreshold: 40,
    violetLineThreshold: 20
  });

  const mockChartData = [
    { name: 'Jan', value: 85 },
    { name: 'Feb', value: 82 },
    { name: 'Mar', value: 78 },
    { name: 'Apr', value: 75 },
    { name: 'May', value: 80 },
  ];

  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Total Investment</h3>
            <Wallet className="text-blue-600" />
          </div>
          <p className="text-3xl font-bold mt-2">${poolStats.totalInvestment.toLocaleString()}</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Average Interest Rate</h3>
            <TrendingUp className="text-green-600" />
          </div>
          <p className="text-3xl font-bold mt-2">{poolStats.averageInterestRate}%</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Risk Level</h3>
          </div>
          <RiskIndicator
            currentValue={poolStats.riskScore}
            thresholds={{
              safe: poolStats.safeLineThreshold,
              yellow: poolStats.yellowLineThreshold,
              red: poolStats.redLineThreshold,
              violet: poolStats.violetLineThreshold
            }}
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Risk Score Trend</h2>
        <LineChart width={800} height={300} data={mockChartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#2563eb" />
        </LineChart>
      </div>
    </main>
  );
};

export default Dashboard;