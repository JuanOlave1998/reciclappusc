import React from 'react';
import mockData from '../mock/data';

const MapSection = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-xl">
      <h2 className="text-xl font-bold mb-4">📍 Puntos de Reciclaje</h2>
      
      <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-4 flex items-center justify-center">
        <p className="text-gray-500">Mapa interactivo aquí</p>
      </div>
      
      <div className="space-y-3">
        {mockData.recyclingPoints.map(point => (
          <div key={point.id} className="p-3 border rounded-lg hover:bg-gray-50 transition">
            <h3 className="font-bold">{point.name}</h3>
            <p className="text-sm text-gray-600">
              Acepta: {point.types.join(', ')}
            </p>
            <p className="text-xs text-gray-500 mt-1">{point.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapSection;