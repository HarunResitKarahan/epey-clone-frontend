import './style.css';
import Navbar from '../../components/Navbar';
import Carousel from './Carousel';
import FeaturedNews from './FeaturedNews';
// import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <div className="App container">
      <Navbar></Navbar>
      <div className='row'>
        <Carousel></Carousel>
        <FeaturedNews></FeaturedNews>
      </div>
    </div>
  );
}
