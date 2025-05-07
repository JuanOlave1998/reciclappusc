import React, { useState } from 'react';
import { materials } from '../mock/data';

const ScannerTab = ({ addPoints }) => {
  const [scannedItem, setScannedItem] = useState(null);
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      const randomMaterial = materials[Math.floor(Math.random() * materials.length)];
      setScannedItem(randomMaterial);
      setIsScanning(false);
    }, 1500);
  };

  return (
    <div className="p-4">
      <div className="bg-gray-100 rounded-xl h-64 flex flex-col items-center justify-center mb-6">
        {isScanning ? (
          <p className="text-gray-500">Escaneando...</p>
        ) : scannedItem ? (
          <div className={`${scannedItem.color} p-6 rounded-lg text-center`}>
            <p className="font-bold">{scannedItem.name}</p>
            <p className="text-2xl mt-2">+{scannedItem.points} puntos</p>
          </div>
        ) : (
          <p className="text-gray-500">Presiona escanear</p>
        )}
      </div>
      
      <button
        onClick={handleScan}
        className="w-full py-3 bg-green-500 text-white rounded-lg font-bold hover:bg-green-600 transition"
      >
        ESCANEAR
      </button>

      {scannedItem && (
        <button
          onClick={() => {
            addPoints(scannedItem.points);
            setScannedItem(null);
          }}
          className="w-full py-3 bg-black text-white rounded-lg font-bold mt-4 hover:bg-gray-800 transition"
        >
          ACEPTAR PUNTOS
        </button>
      )}
    </div>
  );
};

export default ScannerTab;