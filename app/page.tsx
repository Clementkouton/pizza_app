"use client";

import Nav from "./Components/Nav";
import Header from "./Components/Header";
import ListPizza from "./Components/ListPizza";
import Modal from "./Components/Modal";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import OrderSummary from "./Components/OrderSummary";
import { db } from "./db/firebase.config";
import { Pizza } from "./Types/Types";
import { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import { collection, getDocs } from "firebase/firestore";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [cart, setCart] = useState<{ [pizzaId: string]: Pizza }>({});
  const [cartQuantity, setCartQuantity] = useState(0);
  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const [isOrderSummaryVisible, setIsOrderSummaryVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const pizzaCollection = collection(db, "pizza");
      const pizzaSnapshot = await getDocs(pizzaCollection);
      const pizzaData = pizzaSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      } as Pizza));
      setPizzas(pizzaData);
    };

    fetchData();
  }, []);
  const addToCart = (pizza: Pizza) => {
    setCart((prevCart) => ({
      ...prevCart,
      [pizza.id]: pizza
    }));
    setCartQuantity((prevQuantity) => prevQuantity + 1);
    toast.success('Pizza ajoutée au panier');
  };

  const removeFromCart = (pizzaId: string) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      delete updatedCart[pizzaId];
      return updatedCart;
    });
    setCartQuantity((prevQuantity) => prevQuantity - 1);
    toast.success('Pizza supprimée du panier');
  };

  const handleViewOrder = () => {
    setIsOrderSummaryVisible(true);
  };

  const handleCloseOrderSummary = () => {
    setIsOrderSummaryVisible(false);
  };

  return (
    <>
      <Nav cartQuantity={cartQuantity} handleViewOrder={handleViewOrder} />
      <Header />
      <ListPizza pizzas={pizzas} addToCart={addToCart}/>
      <ToastContainer />
      {isOrderSummaryVisible && (
        <OrderSummary
          cart={cart}
          pizzas={pizzas}
          removeFromCart={removeFromCart}
          onClose={handleCloseOrderSummary}
        />
      )}
      <Contact />
      <Footer />
    </>
  );
}