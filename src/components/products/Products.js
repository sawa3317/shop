import { Component } from "react";
import { nanoid } from "nanoid";

import CardProduct from "../сardProduct/СardProduct";

import './products.scss'

class Products extends Component {

    
    render() {
        const {data,toggleFavorites} = this.props;
        let productGroup = data.productsGroup.map((item) => {
            let products = item.product.map((item) => {
                return <CardProduct
                    key = {item.id}
                    data = {item}
                    toggleFavorites = {toggleFavorites}
                    />
            })
            return (
                <div key={nanoid()} className="product_group">
                    <h3>{item.name}</h3>
                    <div className="products">{products}</div>
                </div>
            )
        })
        return (
            <>
                {productGroup}
                
            </>
            
        )
    }
}

export default Products;