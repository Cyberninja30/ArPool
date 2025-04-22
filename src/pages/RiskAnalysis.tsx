import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area } from 'recharts';

const RiskAnalysis: React.FC = () => {
  const riskTrendData = [
    { date: '2024-01', safe: 65, yellow: 25, red: 8, violet: 2 },
    { date: '2024-02', safe: 60, yellow: 28, red: 10, violet: 2 },
    { date: '2024-03', safe: 55, yellow: 30, red: 12, violet: 3 },
    { date: '2024-04', safe: 58, yellow: 27, red: 11, violet: 4 },
    { date: '2024-05', safe: 62, yellow: 25, red: 9, violet: 4 },
  ];

  const riskDistributionData = [
    { name: 'Safe', value: 62 },
    { name: 'Yellow', value: 25 },
    { name: 'Red', value: 9 },
    { name: 'Violet', value: 4 },
  ];

  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Risk Analysis</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Risk Distribution Over Time</h2>
          <AreaChart width={600} height={300} data={riskTrendData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="safe" stackId="1" stroke="#10B981" fill="#10B981" />
            <Area type="monotone" dataKey="yellow" stackId="1" stroke="#FBBF24" fill="#FBBF24" />
            <Area type="monotone" dataKey="red" stackId="1" stroke="#EF4444" fill="#EF4444" />
            <Area type="monotone" dataKey="violet" stackId="1" stroke="#8B5CF6" fill="#8B5CF6" />
          </AreaChart>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Current Risk Distribution</h2>
          <div className="space-y-4">
            {riskDistributionData.map((item) => (
              <div key={item.name} className="flex items-center">
                <div className="w-24 text-gray-600">{item.name}</div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 rounded-full">
                    <div
                      className={`h-4 rounded-full ${
                        item.name === 'Safe'
                          ? 'bg-green-500'
                          : item.name === 'Yellow'
                          ? 'bg-yellow-500'
                          : item.name === 'Red'
                          ? 'bg-red-500'
                          : 'bg-purple-500'
                      }`}
                      style={{ width: `${item.value}%` }}
                    ></div>
                  </div>
                </div>
                <div className="w-16 text-right text-gray-600">{item.value}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Risk Mitigation Recommendations</h2>
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Portfolio Diversification</h3>
            <p className="text-blue-800">Consider redistributing investments to maintain a balanced risk profile across different risk levels.</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-green-900 mb-2">Safe Investment Opportunities</h3>
            <p className="text-green-800">There are currently opportunities to increase safe investments while maintaining competitive returns.</p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg">
            <h3 className="font-semibold text-yellow-900 mb-2">Risk Alerts</h3>
            <p className="text-yellow-800">Monitor yellow-zone investments closely for potential deterioration in risk levels.</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RiskAnalysis;