import { Component } from "react";

import './cart.scss';
import emptyCartImg from './img/empty_cart.png'

class Cart extends Component {
    render() {
        const {onHomePage} = this.props

        return (
            <EmptyCart onHomePage = {onHomePage}/>
            
        )
    }
}

const EmptyCart = ({onHomePage}) => {
    return (
        <div className="empty_cart">
            <img src={emptyCartImg} alt="cart" className="empty_cart_img"/>
            <h5 className="empty_cart_title">Корзина пуста</h5>
            <div className="empty_cart_text">{'Но это никогда не поздно исправить :)'}</div>
            <button onClick={onHomePage} className="empty_cart_btn">В каталог товаров</button>
        </div>
    )
}

export default Cart;