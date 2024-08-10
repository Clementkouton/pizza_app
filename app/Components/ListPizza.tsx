// ListPizza.tsx
import React from 'react';
import { Pizza } from '../Types/Types';
import Card from './Card';

interface ListProps {
  pizzas: Pizza[];
  addToCart: (pizza: Pizza) => void;
}

const ListPizza: React.FC<ListProps> = ({ pizzas, addToCart }) => {
  return (
    <div id="nospizzas" className='mt-16'>
      <h1 className='text-4xl -m-7 text-center font-bold text-stone-700'>Nos meilleurs Pizzas</h1>
      <div className="grid mt-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pizzas.map((pizza) => (
          <Card
            key={pizza.id}
            pizza={pizza}
            addToCart={addToCart} onCardClick={function (pizza: Pizza): void {
              throw new Error('Function not implemented.');
            } }        />
        ))}
      </div>

    </div>
  );
};

export default ListPizza;