import './App.scss';

import { Component } from 'react';

import Database from './database/Database';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Products from './components/products/Products';
import Cart from './components/cart/Cart';

class App extends Component {
  database = new Database();
  

  state = {
    productsGroup: this.database.productsGroup,
    product: this.database.products,
    activeScreen: 'home'

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
    productsGroup: newProductGroup,
    activeScreen: 'home'
  }))
}

onCartPage = () => {
  this.setState({activeScreen: 'cart'});
}



  
  render() {
    const {productsGroup, product, activeScreen} = this.state;
    // this.onCartPage()
    
    
    return (
      <div className="App">
        <div className="container">
          <Header
           counterFavorites ={this.countingFavorites()}
           onFavoritesGroupActive = {this.onFavoritesGroupActive}
           onHomePage = {this.onHomePage}
           onCartPage = {this.onCartPage}
           />
            <UseActiveScreen
            productsGroup = {productsGroup}
            product = {product}
            toggleFavorites= {this.toggleFavorites}
            activeScreen = {activeScreen}
            onHomePage = {this.onHomePage}
            />
           
          <Footer
           onFavoritesGroupActive = {this.onFavoritesGroupActive}
           onCartPage = {this.onCartPage}
           />
        </div>
      </div>
    )
  }
}

export default App;

const UseActiveScreen = ({productsGroup, product, toggleFavorites, activeScreen,onHomePage}) => {
  
  if (activeScreen === 'home') {
    return (
      <Products productsGroup = {productsGroup}
            product = {product}
           toggleFavorites= {toggleFavorites}/>
    )
  } else if (activeScreen === 'cart') {
    return <Cart onHomePage = {onHomePage}/>
  }
}