import React from 'react';

const ScannerScreen = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Escanear código</h2>
      <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center mb-6">
        <p className="text-gray-500">Área del escáner</p>
      </div>
      <button className="w-full py-3 bg-green-500 text-white rounded-lg font-medium">
        Escanear
      </button>
    </div>
  );
};

export default ScannerScreen;