import React from 'react';

const PointsTab = ({ points }) => {
  return (
    <div className="p-4">
      <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-xl p-6 text-white text-center mb-6">
        <p className="text-sm">TUS PUNTOS</p>
        <p className="text-5xl font-bold">{points}</p>
      </div>

      <div className="space-y-4">
        <div className="bg-white border rounded-lg p-4">
          <p className="font-bold">Historial</p>
          <p className="text-gray-500 text-sm mt-2">Botella plástica: +10 pts</p>
          <p className="text-gray-500 text-sm">Lata aluminio: +15 pts</p>
        </div>

        <div className="bg-white border rounded-lg p-4">
          <p className="font-bold">Recompensas disponibles</p>
          <p className="text-gray-500 text-sm mt-2">50 pts: Café gratis</p>
          <p className="text-gray-500 text-sm">100 pts: Entrada cine</p>
        </div>
      </div>
    </div>
  );
};

export default PointsTab;