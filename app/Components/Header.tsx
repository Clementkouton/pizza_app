import Image from 'next/image'
import React from 'react'
import ImageHome from "../../public/pizza1.png"
import { GiFullPizza } from "react-icons/gi";


export default function Header() {
  return (
        <div id="accueil" className=' h=[80vh] max-w-[1500px] m-auto grid grid-cols-1 md:grid-cols-2 px-5 pt-[150px]'>
            <div className=' order-2 md:order flex justify-center flex-col'>
                <h1 className='text-xl md:text-4xl lg:text-6xl text-stone-700 font-black text-center md:text-left mb-2 mt-6 '>
                    Le monde des Meilleurs Pizza Gourmandes
                </h1>
                <p className='text-center md:text-left font-medium mb-2 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nostrum ipsum velit nulla sint accusantium non facere recusandae consequatur atque veritatis illum ab ut commodi veniam, officiis ad iusto perferendis.</p>
                <a href="#pizzaList" className='bg-orange-500 hover:bg-orange-700 rounded-md p-4 text-center text-white font-bold transition-all'>Decouvrir nos Pizzas</a>
            </div> 
            <div className='order-1 md:order-2 flex items-center justify-center flex-col'>
                <img className='w-[500px]' width={1000} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.wvXJ_qqoQ4jVuH06PJCPXwHaGG%26pid%3DApi&f=1&ipt=821f28541e817faa867a37de205e1a3eb0be64c072270e9f81dc5b68d876124f&ipo=images" alt="Pizza home" />
            </div>
        </div>
  )
}
