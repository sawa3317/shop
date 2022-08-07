import { Component } from "react";

import './menu.scss';

class Menu extends Component {
    render() {
        return (
            <div className="menu_list">
                <ul>
                    <li className="menu_list_item">Apple</li>
                    <li className="menu_list_item">INOI</li>
                    <li className="menu_list_item">Nokia</li>
                    <li className="menu_list_item">Oppo</li>
                    <li className="menu_list_item">Xiaomi</li>
                    <li className="menu_list_item">Realme</li>
                    <li className="menu_list_item">Samsung</li>
                    <li className="menu_list_item">Sony</li>
                    <li className="menu_list_item">Vivo</li>
                </ul>
            </div>
        )
    }
}

export default Menu