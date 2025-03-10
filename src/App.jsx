import React, { useEffect, useState } from 'react';

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  // Calculate hours, minutes, and seconds from total seconds
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      const id = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
      setIntervalId(id);
    }
  };

  const stopTimer = () => {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(intervalId);
    }
  };

  const resetTimer = () => {
    setIsRunning(false);
    clearInterval(intervalId);
    setTime(0);
  };

  // Ensure proper formatting of time (always two digits)
  const formatTime = (value) => value.toString().padStart(2, '0');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-2xl text-center w-96 transform transition-all hover:scale-105">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Timer</h1>
        
        <div className="text-6xl font-mono text-blue-600 mb-8 flex justify-center items-center space-x-2">
          {hours > 0 && (
            <>
              <span>{formatTime(hours)}</span>
              <span className="text-4xl text-gray-500">:</span>
            </>
          )}
          <span>{formatTime(minutes)}</span>
          <span className="text-4xl text-gray-500">:</span>
          <span>{formatTime(seconds)}</span>
        </div>
        
        <div className="flex justify-center space-x-4">
          <button 
            onClick={startTimer} 
            disabled={isRunning}
            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors disabled:opacity-50"
          >
            Start
          </button>
          
          <button 
            onClick={stopTimer} 
            disabled={!isRunning}
            className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors disabled:opacity-50"
          >
            Stop
          </button>
          
          <button 
            onClick={resetTimer}
            className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;