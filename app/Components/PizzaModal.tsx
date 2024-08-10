// PizzaModal.tsx
import React from 'react';
import { Pizza } from '../Types/Types';

interface PizzaModalProps {
  pizza: Pizza;
  onClose: () => void;
}

const PizzaModal: React.FC<PizzaModalProps> = ({ pizza, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">{pizza.name}</h2>
        <img src={pizza.image} alt={pizza.name} className="w-full h-48 object-cover mb-4 rounded" />
        <p className="text-gray-700 mb-4">{pizza.ingrdient}</p>
        <p className="text-xl font-semibold mb-4">Prix: {pizza.price}£</p>
        <div className="flex justify-between">
          <button 
            onClick={onClose} 
            className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaModal;