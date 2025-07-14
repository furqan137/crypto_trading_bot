// src/App.js
import React from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import ControlPanel from './components/ControlPanel';
import LivePrice from './components/LivePrice';
import BalanceBox from './components/BalanceBox';
import Logs from './components/Logs';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header />
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <LivePrice />
        <BalanceBox />
        <ControlPanel />
        <Logs />
      </div>
      <Dashboard />
    </div>
  );
}

export default App;
