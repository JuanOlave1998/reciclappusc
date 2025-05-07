import React from 'react';

const RewardsScreen = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Tus recompensas</h2>
      <div className="bg-gray-100 rounded-xl p-4 mb-4">
        <p className="font-medium">Puntos acumulados: 150</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="bg-white border rounded-lg p-4 text-center">
            <p>Recompensa {item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RewardsScreen;