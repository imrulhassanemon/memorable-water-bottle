import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLs, getStoredCard} from "../../../utilites/localstorage";
import Cart from "../Cart/Cart";

const Bottles = () => {

    const [bottles, setBottles] = useState([])
    const [cart, setCart ] = useState([])

    useEffect(()=>{
        fetch('bottle.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])

    useEffect(()=>{
        console.log(bottles.length)
        if(bottles.length > 0){
            const localStoredCard = getStoredCard();
            console.log(localStoredCard, bottles);
            const savedCard = []
            for(const ids of localStoredCard){
                console.log(ids); 
                const bottle = bottles.find(bottle => bottle.id = ids);
                console.log(bottle);
                if(bottle){
                    savedCard.push(bottle)
                }
            }
            console.log(savedCard)
            setCart(savedCard)

        }

    },[bottles])

    const handelAddToCart = (bottle) =>{
        const newCart = [...cart, bottle]
        setCart(newCart)
        addToLs(bottle.id)
        // console.log(bottle.id)
    }
    return (
        <div>
            <h2>Bottles here {bottles.length} </h2>
            <Cart cart={cart}></Cart>
            <div className="Bottles-Container">
            {
                bottles.map((bottle) => <Bottle 
                key={bottle.id} 
                bottle = {bottle} 
                handelAddToCart = {handelAddToCart}
                ></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;