import React from 'react';
import Subtotal from './Subtotal'; 
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import FlipMove from 'react-flip-move';
import { useStateValue } from './StateProvider';


const Checkout = () => {
    const customLeaveAnimation = {
        from: { transform: 'scale(1, 1)' },
        to:   { transform: 'scale(0.5, 1) translateY(-20px)' }
      };
    const [{basket, user}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" 
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />            
            
                <div>
                <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                <FlipMove leaveAnimation={customLeaveAnimation}>
                   { basket.map(item => {
                       return <CheckoutProduct
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                        
                        
                        />
                   }) }
                </FlipMove>
                </div>
            </div>    
            
            
            <div className="checkout__right">
               <Subtotal />
            </div>

            
            
        </div>
    );
}

export default Checkout;