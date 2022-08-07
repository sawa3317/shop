import { Component } from "react";

import './footer.scss'
import vkImg from './img/VK.png';
import instagranImg from './img/Instagram.png';
import telegramImg from './img/Telegram.png';
import whatsappImg from './img/Whatsapp.png';

class Footer extends Component {

    render() {
        return (
            <footer>
                <div className="logo">QPICK</div>
                <ul className="menu">
                    <li className="menu_item">Избранное</li>
                    <li className="menu_item">Корзина</li>
                    <li className="menu_item">Контакты</li>
                </ul>
    
                <div className="info">
                    <div className="terms">Условия сервиса</div>
                </div>
    
                <div className="social_network">
                    <img src={vkImg} alt="vk"/>
                    <img src={instagranImg} alt="Instagram"/>
                    <img src={telegramImg} alt="Telegram"/>
                    <img src={whatsappImg} alt="Whatsapp"/>
                </div>
    
            </footer>
        )
    }
}

export default Footer;