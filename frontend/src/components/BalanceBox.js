import React, { useEffect, useState } from 'react';

function BalanceBox() {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const res = await fetch('/api/balance');
        const data = await res.json();
        setBalance(data);
      } catch (error) {
        console.error('Failed to fetch balance:', error);
      }
    };
    fetchBalance();
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Account Balance</h2>
      {balance ? (
        <div className="space-y-2 text-sm text-gray-700">
          {Object.entries(balance).map(([asset, info]) => (
            <div key={asset} className="flex justify-between">
              <span className="font-medium">{asset}</span>
              <span>{parseFloat(info.free).toFixed(4)} (Free)</span>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">Loading...</p>
      )}
    </div>
  );
}

export default BalanceBox;
