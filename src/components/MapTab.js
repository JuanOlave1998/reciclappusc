import React from 'react';
import { recyclingPoints } from '../mock/data';

const MapTab = () => {
  return (
    <div className="p-4">
      <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center mb-6">
        <p className="text-gray-500">Mapa interactivo aquí</p>
      </div>

      <div className="space-y-3">
        {recyclingPoints.map(point => (
          <div key={point.id} className="bg-white border rounded-lg p-4">
            <p className="font-bold">{point.name}</p>
            <p className="text-gray-500 text-sm">{point.location}</p>
            <p className="text-green-500 text-sm mt-1">Acepta: {point.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapTab;