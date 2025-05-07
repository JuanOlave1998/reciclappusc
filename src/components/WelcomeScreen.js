import React from 'react';

const WelcomeScreen = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <div className="text-center max-w-xs">
        <div className="w-24 h-24 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <span className="text-3xl">♻️</span>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-3">ReciclApp USACA</h1>
        <p className="text-gray-500 mb-8">
          Recicla, gana puntos, ayuda al planeta
        </p>
        
        <button
          onClick={onStart}
          className="w-full py-3 bg-black text-white rounded-lg font-medium text-lg hover:bg-gray-800 transition-colors active:scale-95 transform"
        >
          Comenzar
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;