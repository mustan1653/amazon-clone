import React, { forwardRef } from 'react';
import {useStateValue} from './StateProvider';
import './CheckoutProduct.css';
import { Refresh } from '@material-ui/icons';

const CheckoutProduct = forwardRef(({id, image, title, price, rating, hideButton}, ref) => {
    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket = () => {
       //remove item from basket 
       dispatch({
           type:'REMOVE_FROM_BASKET',
           id: id,
       })
    } 
    
    return (
            <div className="checkoutProduct" ref={ref}>
            <img className="checkoutProduct__image" src={image} alt=""/>
        
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <strong>Rs</strong>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                )}
                
            </div>
        </div>  
      
    );
})

export default CheckoutProduct;