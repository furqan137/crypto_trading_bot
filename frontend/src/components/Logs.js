import React, { useEffect, useState } from 'react';

function Logs() {
  const [logs, setLogs] = useState('');

  useEffect(() => {
    const fetchLogs = async () => {
      const res = await fetch('/logs/activity.log');
      const text = await res.text();
      setLogs(text);
    };
    fetchLogs();
  }, []);

  return (
    <div>
      <h2>Activity Logs</h2>
      <textarea readOnly rows={10} style={{ width: '100%' }} value={logs} />
    </div>
  );
}

export default Logs;
