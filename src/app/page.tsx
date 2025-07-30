'use client';

import { useState } from 'react';
import { INHERITANCE_DATA, DEMO_VERIFICATION } from '@/data/mockData';

// Main demo component with all 3 screens
export default function CryptoInheritorDemo() {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [claimedAssets, setClaimedAssets] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(false);

  // Calculate total claimed value
  const claimedValue = INHERITANCE_DATA.assets
    .filter(asset => claimedAssets.has(asset.id))
    .reduce((sum, asset) => sum + asset.usdValue, 0);

  // Screen components (will be built in next phases)
  const renderScreen = () => {
    switch (currentScreen) {
      case 1:
        return <DiscoveryScreen onNext={() => setCurrentScreen(2)} />;
      case 2:
        return (
          <AssetScreen 
            onClaim={handleAssetClaim}
            claimedAssets={claimedAssets}
            loading={loading}
            onComplete={() => setCurrentScreen(3)}
          />
        );
      case 3:
        return <SuccessScreen claimedValue={claimedValue} />;
      default:
        return <DiscoveryScreen onNext={() => setCurrentScreen(2)} />;
    }
  };

  // Mock asset claiming with realistic delay
  const handleAssetClaim = (assetId: string) => {
    setLoading(true);
    
    // Simulate blockchain transaction delay
    setTimeout(() => {
      setClaimedAssets(prev => new Set([...prev, assetId]));
      setLoading(false);
      
      // Move to success screen after claiming all ready assets
      const readyAssets = INHERITANCE_DATA.assets.filter(a => a.status === 'ready');
      if (claimedAssets.size + 1 >= readyAssets.length) {
        setTimeout(() => setCurrentScreen(3), 1500);
      }
    }, 2500); // 2.5 second delay feels realistic for blockchain
  };

  return (
    <div className="min-h-[calc(100vh-120px)] flex flex-col">
      {/* Progress indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-center space-x-4 mb-4">
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                step === currentScreen 
                  ? 'bg-emerald-400 scale-125' 
                  : step < currentScreen 
                    ? 'bg-emerald-600' 
                    : 'bg-slate-600'
              }`}
            />
          ))}
        </div>
        <div className="text-center text-slate-400 text-sm">
          Step {currentScreen} of 3
        </div>
      </div>

      {/* Screen content */}
      <div className="flex-1">
        {renderScreen()}
      </div>
    </div>
  );
}

// Placeholder screen components (will be built in next phases)
function DiscoveryScreen({ onNext }: { onNext: () => void }) {
  return (
    <div className="glass rounded-2xl p-8 text-center">
      <h1 className="text-4xl font-bold text-white mb-4">
        Digital Assets Awaiting Your Claim
      </h1>
      <p className="text-slate-300 mb-8">
        {INHERITANCE_DATA.deceased.name} has designated you as a beneficiary
      </p>
      <button 
        onClick={onNext}
        className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold py-3 px-8 rounded-lg transition-smooth transform hover:scale-105"
      >
        Continue to Claim Assets
      </button>
    </div>
  );
}

function AssetScreen({ 
  onClaim, 
  claimedAssets, 
  loading, 
  onComplete 
}: { 
  onClaim: (id: string) => void;
  claimedAssets: Set<string>;
  loading: boolean;
  onComplete: () => void;
}) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">
          Welcome, {INHERITANCE_DATA.beneficiary.name}
        </h2>
        <p className="text-slate-300">
          {INHERITANCE_DATA.deceased.name} has left you the following digital assets
        </p>
      </div>
      
      {/* Placeholder for asset cards */}
      <div className="glass rounded-2xl p-8 text-center">
        <div className="text-6xl font-bold gradient-text mb-4">
          ${INHERITANCE_DATA.totalValue.toLocaleString()}
        </div>
        <p className="text-slate-300 mb-8">Total Inheritance Value</p>
        <p className="text-slate-400">Asset cards will be built in next phase</p>
      </div>
    </div>
  );
}

function SuccessScreen({ claimedValue }: { claimedValue: number }) {
  return (
    <div className="glass rounded-2xl p-8 text-center">
      <div className="text-6xl mb-6">🎉</div>
      <h2 className="text-4xl font-bold text-white mb-4">
        Successfully Claimed!
      </h2>
      <div className="text-3xl font-bold text-emerald-400 mb-8">
        ${claimedValue.toLocaleString()}
      </div>
      <p className="text-slate-300">
        Your inheritance has been safely transferred to your wallet
      </p>
    </div>
  );
}