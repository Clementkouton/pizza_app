import React, { useEffect, useRef } from 'react';
import { Pizza } from '../Types/Types';

interface PizzaModalProps {
  pizza: Pizza;
  onClose: () => void;
}

const PizzaModal: React.FC<PizzaModalProps> = ({ pizza, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollY);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="modal-overlay">
      <div ref={modalRef} className="modal-content">
        <h2>{pizza.name}</h2>
        <p>{pizza.ingredient}</p>
        <p>Prix: {pizza.price}£</p>
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
};

export default PizzaModal;