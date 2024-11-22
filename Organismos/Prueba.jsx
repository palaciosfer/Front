// ./src/App.js
import React from 'react';

const Prueba = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-green-100 p-8">
      <div className="grid grid-cols-2 gap-8 w-full max-w-6xl">
        <div className="bg-white p-8 shadow-md w-full">
          <h2 className="text-center text-xl font-semibold mb-4">Temperatura</h2>
          <div className="bg-gray-300 h-60"></div> {/* Div para Temperatura */}
        </div>
        <div className="bg-white p-8 shadow-md w-full">
          <h2 className="text-center text-xl font-semibold mb-4">Humedad</h2>
          <div className="bg-gray-300 h-60"></div> {/* Div para Humedad */}
        </div>
        <div className="bg-white p-8 shadow-md w-full">
          <h2 className="text-center text-xl font-semibold mb-4">CO2</h2>
          <div className="bg-gray-300 h-60"></div> {/* Div para CO2 */}
        </div>
        <div className="bg-white p-8 shadow-md w-full">
          <h2 className="text-center text-xl font-semibold mb-4">Luxómetro</h2>
          <div className="bg-gray-300 h-60"></div> {/* Div para Luxómetro */}
        </div>
      </div>
    </div>
  );
};


export default Prueba;
