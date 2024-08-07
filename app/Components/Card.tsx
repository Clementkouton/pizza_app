import React, { useState } from 'react'
import { Pizza } from '../Types/Types'
import { toast } from 'react-toastify'

interface CardProps {
    pizza: Pizza;
    addToCart: (pizza: Pizza) => void;
    onCardClick: (pizza: Pizza) => void;
}

const defaultImage = 'https://via.placeholder.com/150';

const Card: React.FC<CardProps> = ({ pizza, addToCart, onCardClick }) => {
    const [quantity, setQuantity] = useState(1);

    const handleAddCart = () => {
        addToCart(pizza);
        setQuantity(quantity + 1);
        toast.success('Pizza ajoutée a votre commande');
    };

    return (
        <div className=' border  rounded-md p-4 shadow-md border-white relative cursor-pointer  hover:border-orange-600 transition-all w-auto'>
            <img src={pizza.image} alt={pizza.name} className='image object-content mb-4 ' />
            {/* ... rest of your card content */}
            <div className=' bg-orange-600 text-white py-2 px-3 rounded-md font-bold absolute top-5 right-5'>{pizza.price}£</div>
            <div className=' flex items-center justify-center lg:grid-rows-1  gap-2'>
                <button onClick={handleAddCart} className=' bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-600 '>Commander </button>                

            </div>
        </div>
    )
}

export default Card;
