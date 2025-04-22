export interface Investment {
  id: string;
  company: string;
  amount: number;
  interestRate: number;
  riskLevel: 'safe' | 'yellow' | 'red' | 'violet';
  lastUpdated: Date;
}

export interface PoolStats {
  totalInvestment: number;
  averageInterestRate: number;
  riskScore: number;
  safeLineThreshold: number;
  yellowLineThreshold: number;
  redLineThreshold: number;
  violetLineThreshold: number;
}