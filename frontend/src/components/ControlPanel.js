import React from 'react';

function ControlPanel() {
  const handleStart = async () => {
    try {
      await fetch('/api/bot/start');
      alert('Bot started successfully!');
    } catch (error) {
      console.error('Failed to start bot:', error);
    }
  };

  const handleStop = async () => {
    try {
      await fetch('/api/bot/stop');
      alert('Bot stopped successfully!');
    } catch (error) {
      console.error('Failed to stop bot:', error);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Bot Control</h2>
      <div className="flex gap-4">
        <button
          onClick={handleStart}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-xl shadow"
        >
          Start Bot
        </button>
        <button
          onClick={handleStop}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-xl shadow"
        >
          Stop Bot
        </button>
      </div>
    </div>
  );
}

export default ControlPanel;
