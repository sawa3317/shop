import {Component} from 'react';

import './header.scss'
import phoneImg from './img/phone.png'
import favoritesImg from './img/favorites.png'
import cartImg from './img/cart.png'
import arrowImg from './img/arrow.png'

import Menu from '../menu/Menu';

class Header extends Component {
    state = {
        menuActive : false
    }
    render() {
        const {counterFavorites, onFavoritesGroupActive, onHomePage, onCartPage} = this.props;
        let styleMarkerFavorites = counterFavorites >= 1 ? null: "hide";
        return (
            <header>
                <div onClick={onHomePage} className="logo">QPICK</div>
                <div className="menu">
                    <img src={phoneImg} alt="phone" className="menu_icon_phone"/>
                    <div className="menu_text">Выбрать модель телефона</div>
                    <img className="arrow" src={arrowImg} alt="arrow"/>
                    <Menu/>

                </div>
                <div className="btn_group">
                    <div className="favorites">
                        <img onClick={onFavoritesGroupActive} src={favoritesImg} alt="favorites"/>
                        <div className={"marker " + styleMarkerFavorites}>{counterFavorites}</div>
                    </div>
                    <div onClick={onCartPage} className="cart">
                        <img src={cartImg} alt="cart"/>
                        <div className="marker">0</div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;