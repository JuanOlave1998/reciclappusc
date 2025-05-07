import React from 'react';

const Onboarding = ({ onComplete }) => {
  const features = [
    {
      icon: "♻️",
      title: "Escanea residuos",
      description: "Usa tu cámara para identificar qué tipo de residuo es"
    },
    {
      icon: "🗺️",
      title: "Encuentra contenedores",
      description: "Mapa interactivo con todos los puntos de reciclaje"
    },
    {
      icon: "🏆",
      title: "Gana recompensas",
      description: "Canjea tus puntos por beneficios en la universidad"
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl max-w-md w-full">
      <h2 className="text-2xl font-bold mb-8 text-center">
        ¡Bienvenido a EcoCampus!
      </h2>

      <div className="space-y-6 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="text-3xl">{feature.icon}</div>
            <div>
              <h3 className="font-bold text-lg">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={onComplete}
        className="w-full bg-green-500 text-white py-3 rounded-lg font-bold hover:bg-green-600 transition"
      >
        Comenzar
      </button>
    </div>
  );
};

export default Onboarding;