

import { IoPizzaSharp } from "react-icons/io5";
import { LuPizza } from "react-icons/lu";
import { FaHome } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
import { GiFullPizza } from "react-icons/gi";


interface NavProps {
    cartQuantity: number;
}

const Nav:React.FC<NavProps> = ({cartQuantity}) => {

    const router = useRouter();

    const menu = [
        {name: 'Home', icon:FaHome},
        {name: 'Nos pizzas', icon:IoPizzaSharp},
        {name: 'Contact', icon:IoMdMail},
    ]
    
  return (
    
<nav className='fixed: z-1 shadow-md w-full bg-white h-50 justify-between items-center p-5 text-stone-700'>
  {/* Conteneur principal pour l'alignement */}
  <div className="flex w-full justify-between">
    {/* Section gauche */}
    <div className="flex items-center gap-2 cursor-pointer" onClick={() => router.push("/")}>
      <GiFullPizza className="text-orange-600 text-2xl" />
      <span className="font-black size-3 mb-2">Pizza</span>
    </div>

    {/* Section centrale */}
    <ul className="hidden md:flex items-center gap-4">
      {menu.map((item, index) => (
        <li
          className="flex items-center gap-3 cursor-pointer hover:text-orange-600 hover:underline"
          key={index}
        >
          <span><item.icon /></span>
          <span>{item.name}</span>
        </li>
      ))}
    </ul>

    {/* Section droite */}
    <button className="bg-orange-700 text-white px-4 py-2 rounded-md hover:bg-orange-700 flex items-center gap-2">
      <FaShoppingCart />
      <span>{cartQuantity}</span>
    </button>
  </div>
</nav>
    
  )
}

export default Nav;
