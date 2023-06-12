import React, {useContext} from 'react'
import './CheckOut.css'
import { CartContext } from '../../context/CartContext'
import ItemCard from '../../components/ItemCard/ItemCard'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem'


function CheckOut({product}) {
    //change to global state
    //NOTE {} not []

    const {checkout, getTotalCart, setCheckOut} = useContext(CartContext)

    const handleCart = () => {
        console.log('check',checkout)

    }
   
  //create state to control modal
  const[isOpen, setIsOpen] = React.useState(false)


  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '90%',
    },
    overlay:{
      backgroundColor: "rgba(0,0,0,.5)"
    }
  };
  
  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement(document.getElementById('root'));
    




  return (
    <div className='checkout-page'>
        {checkout.length > 0?(
            <ul className='checkout-header'>
                <p>Item</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Remove</p>

            </ul>)
            :
            (<p></p>)
        }
        
      
           {
           
                
                checkout.map(item=><CheckoutItem
                    key={item.id}
                    product={item}
                     />)

                
            }

        <div className='checkout-sub'>
            {checkout.length > 0?(
            <><h4> Total $: {getTotalCart}</h4>
            <button onClick={() => setIsOpen(true)}>Checkout</button><Modal
                      isOpen={isOpen}
                      onRequestClose={() => setIsOpen(false)}
                      style={customStyles}
                      contentLabel="Contact Us Modal"
                  >
                      <div className='modal-header'>
                          <h2>Your Order was successful!</h2>
                          <h3>Check your email for the order confirmation. Thank you for shopping with Fake Store!</h3>
                          <Link to='/' ><button className='modal-close-btn' onClick={() => setCheckOut([])} >Return to main page</button> </Link>
                      </div>

                  </Modal></>)
            :
        (<h3 className='checkout-message'>No Product to checkout yet</h3>)
            }
        </div>
    </div>
    
  )
}

export default CheckOut