import React from 'react';

const Navigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'scan', icon: '📷', label: 'Escanear' },
    { id: 'points', icon: '🏆', label: 'Puntos' },
    { id: 'map', icon: '🗺️', label: 'Mapa' },
    { id: 'table', icon: '📋', label: 'Tabla' }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex flex-col items-center p-2 ${activeTab === tab.id ? 'text-green-500' : 'text-gray-500'}`}
        >
          <span className="text-2xl">{tab.icon}</span>
          <span className="text-xs">{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default Navigation;