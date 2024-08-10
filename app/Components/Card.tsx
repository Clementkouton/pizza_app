import React, { useState } from 'react';
import { Pizza } from '../Types/Types';
import { toast } from 'react-toastify';
import PizzaModal from './PizzaModal';
interface CardProps {
  pizza: Pizza;
  addToCart: (pizza: Pizza) => void;
  onCardClick: (pizza: Pizza) => void;
}

const defaultImage = 'https://via.placeholder.com/300x200';

const Card: React.FC<CardProps> = ({ pizza, addToCart, onCardClick }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddCart = () => {
    addToCart(pizza);
    setQuantity(quantity + 1);
  };

  return (
    <div className=' p-2 border m-6 rounded-md shadow-md border-white hover:border-orange-600 transition-all w-full flex flex-col'>
      <div className='relative pt-[66.67%] overflow-hidden'>
        <img 
          src={pizza.image || defaultImage} 
          alt={pizza.name} 
          className='absolute top-0 left-0 w-full h-full object-cover'
        />
        <div className='absolute top-2 right-2 bg-orange-600 text-white py-1 px-2 rounded-md font-bold'>
          {pizza.price}£
        </div>
      </div>
      <div className='p-4 flex flex-col flex-grow'>
        <h3 className='text-lg font-semibold mb-2'>{pizza.name}</h3>
        <p className='text-sm text-gray-600 mb-4 flex-grow'>{}</p>
        <div className='flex flex-col gap-2'>
          <button 
            onClick={handleAddCart} 
            className='bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors'
          >
            Commander
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;