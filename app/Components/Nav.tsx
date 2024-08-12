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
  handleViewOrder: () => void;
}

const Nav: React.FC<NavProps> = ({ cartQuantity, handleViewOrder }) => {
  const router = useRouter();

  const menu = [
    { name: "Accueil", icon: FaHome },
    { name: "Nos pizzas", icon: IoPizzaSharp },
    { name: 'Contact', icon: IoMdMail },
  ];

  return (
    <nav className='fixed z-10 shadow-md bg-white h-50 justify-between items-center p-5 text-slate-700 w-100'>
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => router.push("/")}>
          <GiFullPizza className="text-orange-600 text-3xl" />
          <span className="font-black text-2xl">Pizza</span>
        </div>
        <ul className="hidden md:flex items-center ">
          
          <li className="flex mx-3 items-center cursor-pointer hover:text-orange-600 ">
            <a href="#accueil" className="flex items-center">
              <FaHome/>
              <span>Accueil</span>
            </a>
          </li>

          <li className="  mx-3 flex items-center cursor-pointer hover:text-orange-600 ">
            <a href="#nospizzas" className="flex items-center">
              <IoPizzaSharp/>
              <span>Nos pizzas</span>
            </a>
          </li>

          <li className=" mx-3 flex items-center cursor-pointer hover:text-orange-600">
            <a href="#contact" className="flex items-center">
              <IoMdMail/>
              <span>Contact</span>
            </a>
          </li>
        
          
        </ul>
        <button
          className="cart bg-orange-700 text-white px-4 py-2 rounded-md hover:bg-orange-700 flex items-center gap-2"
          onClick={handleViewOrder}
        >
          <FaShoppingCart />
          <span>{cartQuantity} </span>
        </button>
      </div>
    </nav>
  );
};

export default Nav;