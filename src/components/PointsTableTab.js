import React from 'react';
import { materials } from '../mock/data';

const PointsTableTab = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Puntos por material</h2>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Material</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Puntos</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {materials.map((material) => (
              <tr key={material.id} className={material.color}>
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                  {material.name}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {material.points} pts
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 bg-blue-50 p-4 rounded-lg">
        <h3 className="font-bold text-blue-800 mb-2">¿Cómo funcionan los puntos?</h3>
        <p className="text-blue-700 text-sm">
          Escanea tus materiales reciclables para acumular puntos. ¡Más puntos = mejores recompensas!
        </p>
      </div>
    </div>
  );
};

export default PointsTableTab;