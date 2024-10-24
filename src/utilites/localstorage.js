//  const getStoredCard = () =>{
//     const storedCardString = localStorage.getItem('cart');
//     if(storedCardString){
//         return JSON.parse(storedCardString)
//     }
//     return [];
//  }

// const saveCartToLs = (cart) => {
//     const cardStringify = JSON.stringify(cart)
//     localStorage.setItem('cart', cardStringify)

// }

// const addToLs = (id)=>{
//     const cart = getLocalStorage()
//     cart.push(id)
//     // saved to local storage
//     saveCartToLs(cart)

// }


const getStoredCard = () =>{
    const getStoredCard = localStorage.getItem('cart');
    if(getStoredCard){
       return JSON.parse(getStoredCard)
    }
    return []
}
const saveCartToLs = (cart) =>{
    const cardStringify =  JSON.stringify(cart)
    localStorage.setItem("cart",cardStringify)
}

const addToLs = (id) => {
    const setItem = getStoredCard(); 
    setItem.push(id)
    saveCartToLs(setItem)

}

export {addToLs, getStoredCard}
