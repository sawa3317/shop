import './App.scss';

import { Component } from 'react';

import Database from './database/Database';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Products from './components/products/Products';

class App extends Component {
  database = new Database();
  

  state = {
    productsGroup: this.database.productsGroup,
    product: this.database.products

  }

  toggleFavorites = (id) => {
    const newProduct = this.state.product.map(item => {
      if (item.id === id) {
        if (item.id === id) {
          if (item.favorites) {
            item.favorites = false;
          } else {
            item.favorites = true;
          }
        }
      }
      return item;
    })
    this.setState(() => {
      return {
        product: newProduct
      }
    }) 
  }
 
  
countingFavorites = () => {
  let result = 0
  let product = this.state.product;
  product.forEach(item => {
    if (item.favorites) {
      result++;
    }
  })
  return result
}

onFavoritesGroupActive = (e) => {
  let newProductGroup = this.state.productsGroup.map(item => {
    if (item.name === "Избраное") {
      item.active = true
    } else {
      item.active = false
    }
    return item
  })
  this.setState(() => ({
    productsGroup: newProductGroup
  }))
}

onHomePage = () => {
  let newProductGroup = this.state.productsGroup.map(item => {
    if (item.name === "Избраное") {
      item.active = false
    } else {
      item.active = true
    }
    return item
  })
  this.setState(() => ({
    productsGroup: newProductGroup
  }))
} 
  
  render() {
    const {productsGroup, product} = this.state;
    return (
      <div className="App">
        <div className="container">
          <Header
           counterFavorites ={this.countingFavorites()}
           onFavoritesGroupActive = {this.onFavoritesGroupActive}
           onHomePage = {this.onHomePage}
           />
          <Products productsGroup = {productsGroup}
            product = {product}
           toggleFavorites= {this.toggleFavorites}/>
          <Footer/>
        </div>
      </div>
    )
  }
}

export default App;
