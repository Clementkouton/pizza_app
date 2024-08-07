"use client"

import Nav from "./Components/Nav";
import Header from "./Components/Header";
import ListPizza from "./Components/ListPizza";
import Modal from "./Components/Modal";
import Footer from "./Components/Footer";
import {db} from "./db/firebase.config";
import { Pizza } from "./Types/Types";
import { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import { collection, getDocs } from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Home() {

  const [cartQuantity, setCartQuantity] = useState(0);

  const [pizzas, setPizzas] = useState<Pizza[]>([])

  useEffect(()=> {
    const fetchData = async () => {
      const pizzaCollection = collection(db, "pizza");
      const pizzaSnapshot = await getDocs(pizzaCollection)
      const pizzaData = pizzaSnapshot.docs.map((doc)=> ({
        id: doc.id, 
        ...doc.data()
      })) as Pizza[];
      setPizzas(pizzaData)
    };

    fetchData()
  }, [])

  function addTocard(pizza: Pizza) {
    setCartQuantity(cartQuantity + 1);
  }

  return (
    <>
      <Nav cartQuantity={cartQuantity} />
      <Header />

      <ListPizza pizzas={pizzas} addToCart={addTocard}/>
      <ToastContainer />
      <Footer />
    </>
  );
}
