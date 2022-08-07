import './App.scss';

import { Component } from 'react';

import Database from './database/Database';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Products from './components/products/Products';

class App extends Component {
  database = new Database();
  

  state = {
    data: this.database.data

  }

  toggleFavorites = (id) => {
    const newProductGroup = this.state.data.productsGroup.map(item => {
      if(item.product) {
        let product = item.product.map(item => {
          if (item.id === id) {
            if (item.favorites) {
              console.log('true')
              item.favorites = false;
            } else {
              item.favorites = true;
            }
          }
          return item;
        })
        item.product = product;
        return item;
        
      } else {
        return item;
      }
    })
    const newData = this.state.data
    newData.productsGroup = newProductGroup
    this.setState(({data}) => {
      return {
        data: newData
      }
    }) 
  }
 
  
countingFavorites = () => {
  let result = 0
  let arr = this.state.data.productsGroup;
  arr.forEach(item => {
    item.product.forEach(item => {
      if (item.favorites) {
        result++;
      }
    })
  })
  return result
}
  
  render() {
    console.log(this.countingFavorites())
    return (
      <div className="App">
        <div className="container">
          <Header counterFavorites ={this.countingFavorites()}/>
          <Products data = {this.state.data}
           toggleFavorites= {this.toggleFavorites}/>
          <Footer/>
        </div>
      </div>
    )
  }
}

export default App;
