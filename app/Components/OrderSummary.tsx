import React, { useEffect } from 'react';
import { Pizza } from '../Types/Types';

interface OrderSummaryProps {
  cart: { [pizzaId: string]: Pizza };
  pizzas: Pizza[];
  removeFromCart: (pizzaId: string) => void;
  onClose: () => void;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  cart,
  pizzas,
  removeFromCart,
  onClose
}) => {
  const calculateTotalPrice = () => {
    return Object.values(cart).reduce((total, pizza) => total + pizza.price, 0);
  };

  useEffect(() => {
    // Désactiver le défilement du body quand le modal est ouvert
    document.body.style.overflow = 'hidden';
    
    // Réactiver le défilement quand le composant est démonté
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-20">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Commande effectuée</h2>
          <button
            className="text-white hover:bg-orange-700 bg-orange-600 px-3 rounded"
            onClick={onClose}
          >
            X
          </button>
        </div>
        <div className="space-y-4">
          {Object.values(cart).map((pizza) => (
            <div
              key={pizza.id}
              className="flex justify-between items-center"
            >
              <div>
                <h3 className="font-bold">{pizza.name}</h3>
                <p>Prix: {pizza.price}£</p>
              </div>
              <button
                className="bg-red-600 text-white px-2 py-1 rounded-md hover:bg-red-600"
                onClick={() => removeFromCart(pizza.id)}
              >
                Retirer
              </button>
            </div>
          ))}
        </div>
        <div className="mt-4 border-t pt-4">
          <p className="text-lg font-bold">Total: {calculateTotalPrice()}£</p>
        </div>
        <div className='justify-center flex'>
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-2 mt-3 rounded focus:outline-none focus:shadow-outline transition duration-300 transform hover:scale-105">
            Passer la commande
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;