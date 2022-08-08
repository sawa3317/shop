import { Component } from "react";
import { nanoid } from "nanoid";

import CardProduct from "../сardProduct/СardProduct";

import './products.scss'

class Products extends Component {

    
    render() {
        const {productsGroup,product,toggleFavorites} = this.props;
        let productGroupRender = productsGroup.map((productsGroup) => {
            let productsRender = product.map((product) => {
                if (product.active &&
                    product.productsGroup === productsGroup.name ||
                    (productsGroup.name === "Избраное" && product.favorites)) {
                    return <CardProduct
                    key = {product.id}
                    data = {product}
                    toggleFavorites = {toggleFavorites}
                    />
                }
            })
            if (productsGroup.active) {
                return (
                <div key={nanoid()} className="product_group">
                    <h3>{productsGroup.name}</h3>
                    <div className="products">{productsRender}</div>
                </div>
                )
            }
        })
        return (
            <>
                {productGroupRender}
            </>
            
        )
    }
}

export default Products;