// Centralized mock data for the entire app
export interface CryptoAsset {
  id: string;
  symbol: string;
  name: string;
  amount: string;
  usdValue: number;
  logo: string;
  status: 'ready' | 'pending' | 'claimed';
}

export interface InheritanceData {
  beneficiary: {
    name: string;
    email: string;
    relationship: string;
  };
  deceased: {
    name: string;
    relationship: string;
    dateOfPassing: string;
  };
  assets: CryptoAsset[];
  totalValue: number;
  claimDeadline: string;
  trustScore: number;
}

// Main inheritance data - easily accessible throughout app
export const INHERITANCE_DATA: InheritanceData = {
  beneficiary: {
    name: "Habiba Ahmad",
    email: "sarah.johnson@email.com",
    relationship: "Daughter"
  },
  deceased: {
    name: "Musa Adamu",
    relationship: "Husband", 
    dateOfPassing: "March 15, 2024"
  },
  assets: [
    {
      id: "btc-001",
      symbol: "BTC",
      name: "Bitcoin",
      amount: "2.5",
      usdValue: 67500,
      logo: "₿",
      status: "ready"
    },
    {
      id: "eth-001", 
      symbol: "ETH",
      name: "Ethereum",
      amount: "15.0",
      usdValue: 45000,
      logo: "Ξ",
      status: "ready"
    },
    {
      id: "usdc-001",
      symbol: "USDC",
      name: "USD Coin",
      amount: "25,000",
      usdValue: 25000,
      logo: "$",
      status: "pending"
    }
  ],
  totalValue: 137500,
  claimDeadline: "December 31, 2024",
  trustScore: 98
};

// Verification code for demo (pre-filled)
export const DEMO_VERIFICATION = {
  code: "JHS-2024-INHERIT",
  isValid: true
};

// Mock wallet address for success screen
export const MOCK_WALLET = {
  address: "0x742d35Cc6634C0532925a3b8D4bC3956bE6C6C5d",
  displayAddress: "0x742d...6C5d"
};

// Trust indicators data
export const TRUST_INDICATORS = [
  { icon: "🔒", text: "Bank-Level Security", subtext: "256-bit encryption" },
  { icon: "🏛️", text: "Legal Compliance", subtext: "Regulated & audited" },
  { icon: "❤️", text: "Family First", subtext: "Built for inheritance" },
  { icon: "⚡", text: "Instant Recovery", subtext: "24/7 availability" }
];

// Success messages for different screens
export const SUCCESS_MESSAGES = {
  verification: "Identity confirmed successfully",
  claim: "Assets transferred to your secure wallet",  
  completion: "Your inheritance is now safely in your control"
};

// Loading messages to make wait times feel shorter
export const LOADING_MESSAGES = [
  "Verifying your identity...",
  "Accessing secure vault...",
  "Preparing asset transfer...",
  "Finalizing blockchain transaction...",
  "Assets successfully claimed!"
];