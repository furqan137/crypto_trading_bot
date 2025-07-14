// src/components/LivePrice.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LivePrice = () => {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/price');
        setPrice(res.data.price);
      } catch (err) {
        console.error('Error fetching price:', err.message);
      }
    };

    fetchPrice();
    const interval = setInterval(fetchPrice, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">Live BTC/USDT Price</h2>
      <p className="text-3xl mt-2 text-green-400">
        {price ? `$${price}` : 'Loading...'}
      </p>
    </div>
  );
};

export default LivePrice;
