import React, { useState } from 'react';
import mockData from '../mock/data';

const ScanSection = () => {
  const [scannedItem, setScannedItem] = useState(null);
  const [showGuide, setShowGuide] = useState(false);

  const handleScan = () => {
    const randomIndex = Math.floor(Math.random() * mockData.residues.length);
    setScannedItem(mockData.residues[randomIndex]);
    setShowGuide(true);
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-xl">
      <div className="aspect-square bg-gray-100 rounded-xl mb-4 flex items-center justify-center">
        {scannedItem ? (
          <div className="text-center">
            <p className="text-2xl font-bold">{scannedItem.name}</p>
            <p className="text-green-500">+{scannedItem.points} puntos</p>
          </div>
        ) : (
          <button 
            onClick={handleScan}
            className="bg-gradient-to-r from-green-400 to-teal-500 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition"
          >
            ESCANEAR
          </button>
        )}
      </div>
      
      {showGuide && (
        <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="font-bold text-blue-800">🗑️ Deposita en:</h3>
          <p className="text-blue-900">
            {scannedItem.type === 'plástico' && 'Contenedor AMARILLO'}
            {scannedItem.type === 'vidrio' && 'Contenedor VERDE'}
            {scannedItem.type === 'papel' && 'Contenedor AZUL'}
            {scannedItem.type === 'orgánico' && 'Contenedor MARRÓN'}
          </p>
        </div>
      )}
    </div>
  );
};

export default ScanSection;