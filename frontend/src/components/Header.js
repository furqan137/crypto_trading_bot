import React from 'react';

function Header() {
  return (
    <header className="bg-gray-800 shadow-md py-6 px-4 mb-4">
      <h1 className="text-center text-3xl md:text-4xl font-bold text-blue-400 tracking-wide">
        🚀 Crypto Trading Bot Dashboard
      </h1>
      <p className="text-center text-gray-300 mt-2 text-sm md:text-base">
        Monitor live prices, balances, and bot activity in real-time
      </p>
    </header>
  );
}

export default Header;
