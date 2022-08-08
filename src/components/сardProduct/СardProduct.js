import { Component } from "react";

import './cardProduct.scss';

import {ReactComponent as IconFavorites} from '../../img/favorites.svg';
import iconFavoritesActive from '../../img/favorites_active.svg';


class CardProduct extends Component {
    state = {
        favorites: 0
    }

    discountCalculation = (price,discount) => {
        let zero = '';
        if(discount<=9) {
            zero =  '0'
        }
        return (price - (price * Number('0.' + zero + discount))).toFixed(2);
    } 
    
    
    render() {
        const {data : {name, img, price, discount, rating, id, favorites},toggleFavorites} = this.props;

        const activeFavorites = favorites ? <img src={iconFavoritesActive} onClick={() => toggleFavorites(id)}  className="favorites" alt="favorites" /> :
        <IconFavorites onClick={() => toggleFavorites(id)} className="favorites"/>;

        return (
            <div className="card_product">
                
                {price ? activeFavorites  :null}
                
                
                <div className="wraper_img">
                    <img src={img} alt={name} />
                </div>
                <div className="card_info">
                    <div className="card_name">{name}</div>
                    {price ? discount ? <div className="card_price">{this.discountCalculation(price,discount) + ' $'}</div> 
                    : <div className="card_price">{price.toFixed(2) + ' $'}</div> :null}
                    {discount ? <div className="card_discount">{'- ' + discount + '%'}</div> : null}
                    {discount ? <div className="card_price_prev">{price.toFixed(2) + " $"}</div> : null}
                </div>
                {rating ? <div className="card_rating"><span>★</span> {rating}</div> :null}  
                
            </div>
        )
    }
}

export default CardProduct;