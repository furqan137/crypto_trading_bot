import React from 'react';
import ControlPanel from './ControlPanel';
import LivePrice from './LivePrice';
import BalanceBox from './BalanceBox';
import Logs from './Logs';

function Dashboard() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', padding: '1rem' }}>
      <ControlPanel />
      <LivePrice />
      <BalanceBox />
      <Logs />
    </div>
  );
}

export default Dashboard;