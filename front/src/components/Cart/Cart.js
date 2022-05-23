import React, { useContext } from 'react';
import styles from '../Cart/Cart.module.scss';
import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';
import {useDispatch ,useSelector} from "react-redux"
import {cartProductIncrement} from "../../store/actionCreators/cartAC"



const Cart = () => {

    const dispatch = useDispatch()

    const {cart} = useSelector(state => state.cart)


    return (

        <div className={styles.cart}>
            <div className={styles.cartWrapper}>

                <h2 className={styles.cartTitle}> Cart </h2>

                <div className={styles.cartInner}>
                    <div className={styles.cartInnerText}>
                        <p>Item</p>
                        <p>Price</p>
                    </div>

                    {
                        cart.length
                            ? cart.map(item =>
                                <CartItem
                                    key={item._id}
                                    imageUrl={item.imageUrl[0]}
                                    name={item.name}
                                    color={item.filter.Color}
                                    size={item.filter.Size}
                                    price={item.price}
                                    quantity={item.quantity}
                                    onClick={() => console.log("hello")}
                                    addProduct = {() => dispatch(cartProductIncrement(item))}

                                />)
                            : <h4 className={styles.cartStatus}> Your cart is empty </h4>
                    }




                    <div className={styles.cartFooter}>

                        <div className={styles.cartFooterTotal}>
                            <p> <span>Subtotal</span> </p>
                            <p> $ 1080 </p>
                        </div>

                        <Button
                            text={'Checkout'}

                        />

                    </div>



                </div>

            </div>
        </div>




    )
}


export default Cart;