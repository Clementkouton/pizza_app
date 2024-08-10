"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { db } from '@/app/db/firebase.config';
import { doc, getDoc } from 'firebase/firestore';
import { Pizza } from '@/app/Types/Types';

export default function PizzaDetails() {
  const { id } = useParams();
  const [pizza, setPizza] = useState<Pizza | null>(null);

  useEffect(() => {
    const fetchPizza = async () => {
      if (typeof id === 'string') {
        const pizzaDoc = doc(db, 'pizza', id);
        const pizzaSnapshot = await getDoc(pizzaDoc);
        if (pizzaSnapshot.exists()) {
          setPizza({ id: pizzaSnapshot.id, ...pizzaSnapshot.data() } as Pizza);
        }
      }
    };

    fetchPizza();
  }, [id]);

  if (!pizza) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{pizza.name}</h1>
      <img src={pizza.image} alt={pizza.name} className="w-full max-w-md mb-4" />
      <p className="text-xl mb-2">Prix: {pizza.price}£</p>
      <p className="mb-4">{pizza.ingrdient}</p>
      {/* Ajoutez d'autres détails de la pizza ici */}
    </div>
  );
}