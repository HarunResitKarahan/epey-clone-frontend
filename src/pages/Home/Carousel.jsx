import React from 'react'
import './Carousel.css'
import image1 from '../../assets/images/sicak-hava-fritozu-air-fryer-61.webp'

export default function Carousel() {
    return (
        <div className='carousel col-sm-8'>
            <div className='carouselMainImage'>
                <img className='img-fluid' src={image1} alt="" />
            </div>
        </div>
    )
}
