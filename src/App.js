import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import ScannerTab from './components/ScannerTab';
import PointsTab from './components/PointsTab';
import MapTab from './components/MapTab';
import PointsTableTab from './components/PointsTableTab';
import Navigation from './components/Navigation';

const App = () => {
  const [appStarted, setAppStarted] = useState(false);
  const [activeTab, setActiveTab] = useState('scan');
  const [points, setPoints] = useState(0);

  const addPoints = (newPoints) => {
    setPoints(prev => prev + newPoints);
  };

  if (!appStarted) {
    return <WelcomeScreen onStart={() => setAppStarted(true)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <header className="bg-white p-4 shadow-sm">
        <h1 className="text-xl font-bold">EcoCampus</h1>
      </header>

      <main>
        {activeTab === 'scan' && <ScannerTab addPoints={addPoints} />}
        {activeTab === 'points' && <PointsTab points={points} />}
        {activeTab === 'map' && <MapTab />}
        {activeTab === 'table' && <PointsTableTab />}
      </main>

      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default App;

// DONE