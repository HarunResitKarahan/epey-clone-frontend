import './style.css';
import Navbar from '../../components/Navbar';
import Carousel from './Carousel';
import FeaturedNews from './FeaturedNews';
import LastAddedProducts from './LastAddedProducts'
import PopulerProducts from './PopulerProducts';
import Footer from '../../components/Footer';
// import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <div className="App container">
      <Navbar></Navbar>
      <div className='row mt-1'>
        <Carousel></Carousel>
        <FeaturedNews></FeaturedNews>
      </div>
      <LastAddedProducts></LastAddedProducts>
      <PopulerProducts></PopulerProducts>
      <Footer></Footer>
    </div>
  );
}
