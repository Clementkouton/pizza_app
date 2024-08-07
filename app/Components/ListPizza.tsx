import { useState } from "react"
import { Pizza } from "../Types/Types"
import Modal from "./Modal";
import Card from "./Card";

//<Modal isOpen={isModalOpen} onClose={handleCloseModel} pizza={setSellectePizza} />

interface ListProps{
    pizzas: Pizza[];
    addToCart: (pizza: Pizza) => void
}

const ListPizza : React.FC<ListProps> = ({pizzas, addToCart}) => {
    const [sellectePizza, setSellectePizza] = useState<Pizza | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCloseClick = (pizza: Pizza) => {
        setSellectePizza(pizza)
        setIsModalOpen(true);
    }

    const handleCloseModel = (pizza: Pizza) => {
        setSellectePizza(null)
        setIsModalOpen(false);
    }


    return(
        <div id="pizzaList" className=" max-w-[1000px] w-full mx-auto p-6">
            <div className=" grid grid-cols-2 px-3 gap-4">
                {pizzas.map((pizza)=> (
                    <Card key={pizza.name} pizza={pizza} addToCart={addToCart} onCardClick={handleCloseClick}  />
                ))}
            </div>
             
        </div>
    )
}
export default ListPizza;