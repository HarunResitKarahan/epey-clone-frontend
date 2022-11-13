import './style.css';
import Navbar from '../../components/Navbar';
import Carousel from './Carousel';
import FeaturedNews from './FeaturedNews';
import LastAddedProducts from './LastAddedProducts'
import PopulerProducts from './PopulerProducts';
import Footer from '../../components/Footer';
import axios from 'axios';
import { useState } from 'react';
// import { Link } from 'react-router-dom';

export function HomePage() {
  const apiUrl = "http://localhost:8586/"
  const [products, setProducts] = useState([])
  axios.get(apiUrl + 'api/Product')
    .then(function (response) {
      setProducts(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  return (
    <div className="App">
      <div className='container mb-3'>
        <Navbar></Navbar>
        <div className='row mt-1'>
          <Carousel></Carousel>
          <FeaturedNews></FeaturedNews>
        </div>
        <LastAddedProducts products={products}></LastAddedProducts>
        <PopulerProducts products={products}></PopulerProducts>
      </div>
      <Footer></Footer>
    </div>
  );
}
