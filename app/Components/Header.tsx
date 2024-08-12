import Image from 'next/image'
import React from 'react'
import ImageHome from "../../public/pizza1.png"
import { GiFullPizza } from "react-icons/gi";


export default function Header() {
  return (
        <div id="accueil" className=' h=[80vh] m-auto grid grid-cols-1 md:grid-cols-2 px-5 pt-[150px]'>
            <div className=' order-2 md:order flex justify-center flex-col'>
                <h1 className='text-3xl md:text-4xl lg:text-6xl text-stone-700 font-black text-center md:text-left mb-2 mt-6 '>
                    Une Expérience Unique à Chaque Commande
                </h1>
                <p className='text-center md:text-left font-medium mb-2 mt-2'>Que vous soyez amateur de classiques intemporels ou en quête de saveurs innovantes, notre menu saura éveiller vos papilles. Des végétariennes gourmandes aux festins carnivores, en passant par nos créations signatures, il y en a pour tous les goûts.</p>
                <p className='text-xl sm:text-1xl md:text-1xl  lg:text-2xl text-stone-700 font-black text-center md:text-left mt-2 mb-4 '>
                Prêt à embarquer pour un voyage gustatif ?
                </p>
                <a href="#nospizzas" className='bg-orange-500  hover:bg-orange-700 rounded-md p-2 sm:p-2 md:p-2 lg:p-4 text-center text-white font-bold transition-all'>Decouvrir nos Pizzas</a>
            </div> 
            <div className='order-1 md:order-2 flex items-center justify-center flex-col'>
                <img className='w-[500px]' width={1000} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.wvXJ_qqoQ4jVuH06PJCPXwHaGG%26pid%3DApi&f=1&ipt=821f28541e817faa867a37de205e1a3eb0be64c072270e9f81dc5b68d876124f&ipo=images" alt="Pizza home" />
            </div>
        </div>
  )
}
