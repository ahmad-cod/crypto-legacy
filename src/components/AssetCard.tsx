import { Button } from "./Button";
import { Card } from "./Card";

interface AssetCardProps {
  asset: {
    symbol: string;
    amount: number;
    usdValue: number;
  };
  onClaim: () => void;
  claimed?: boolean;
}

export const AssetCard = ({ asset, onClaim, claimed = false }: AssetCardProps) => (
  <Card className="flex justify-between items-center">
    <div className="flex items-center space-x-4">
      <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full flex items-center justify-center text-2xl">
        {asset.symbol === 'BTC' ? '₿' : asset.symbol === 'ETH' ? 'Ξ' : '$'}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white">{asset.amount} {asset.symbol}</h3>
        <p className="text-gray-400">${asset.usdValue.toLocaleString()}</p>
      </div>
    </div>
    <Button 
      variant={claimed ? 'success' : 'primary'}
      onClick={onClaim}
    >
      {claimed ? '✓ Claimed' : 'Claim'}
    </Button>
  </Card>
);