import React, { useState } from 'react';
import mockData from '../mock/data';

const RewardsSection = () => {
  const [rewards, setRewards] = useState(mockData.rewards);
  const [userPoints, setUserPoints] = useState(75);

  const claimReward = (id) => {
    setRewards(rewards.map(reward => 
      reward.id === id ? {...reward, claimed: true} : reward
    ));
    setUserPoints(prev => prev - rewards.find(r => r.id === id).points);
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-xl">
      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-4 rounded-xl mb-6">
        <h2 className="font-bold text-lg">Tus puntos</h2>
        <p className="text-3xl font-bold">{userPoints}</p>
      </div>
      
      <h2 className="text-xl font-bold mb-4">🏆 Recompensas</h2>
      
      <div className="space-y-3">
        {rewards.map(reward => (
          <div key={reward.id} className="p-4 border rounded-lg flex justify-between items-center">
            <div>
              <h3 className="font-bold">{reward.name}</h3>
              <p className="text-sm text-gray-600">{reward.points} puntos</p>
            </div>
            <button
              onClick={() => claimReward(reward.id)}
              disabled={reward.claimed || userPoints < reward.points}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                reward.claimed 
                  ? 'bg-gray-200 text-gray-500' 
                  : userPoints >= reward.points 
                    ? 'bg-green-500 text-white hover:bg-green-600' 
                    : 'bg-gray-100 text-gray-400'
              }`}
            >
              {reward.claimed ? 'Obtenido' : 'Canjear'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RewardsSection;