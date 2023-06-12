import {useState, createContext, useEffect} from 'react'
//create context
export const CartContext = createContext()


export default function CartContextProvider(props) {
   //create state to hold product
   const [checkout, setCheckOut ] = useState([])


   

    

   useEffect(
       ()=>{
           console.log('context load')
           //check localstorage to initialize state
           const storedCheckout = localStorage.getItem('checkoutList')
           console.log('value is ', storedCheckout)
           if(storedCheckout){
               //only set if there is something in localStorage
               setCheckOut(JSON.parse(storedCheckout))
           }


       },[] //run once when page loads
   )

   useEffect(
       ()=>{
           console.log('checkout is ', checkout)
           //save new checkout when any changes to local
           localStorage.setItem('checkoutList', JSON.stringify(checkout))

       },[checkout] //run when checkout changes
   )


   //function to add charcter to cart
   const addProduct = (productToAdd) =>{
       console.log('adding', productToAdd)
       //add character to state
       let newCart =[...checkout, productToAdd]
       console.log(newCart)
       //store in state
       setCheckOut(newCart)

   }

   //function to remove char
    const removeProduct = (productId)=>{
       console.log('removeId', productId)
       //remove char from state
       let newCart = checkout.filter(item=> item.id !== productId)
       //set to store
       setCheckOut(newCart)

   }

   //get total amount
    const getTotalCart = checkout.reduce((preVal, currentVal) => {
        return preVal + currentVal.price
    
    }, 0)

    

   return(
       <CartContext.Provider value={{checkout, addProduct, removeProduct, getTotalCart, setCheckOut}} >
           {props.children}
       </CartContext.Provider>
   )
}
