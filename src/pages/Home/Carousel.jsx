import React from 'react'
import './Carousel.css'
import image1 from '../../assets/images/sicak-hava-fritozu-air-fryer-61.webp'
import image2 from '../../assets/images/ayakkabi-43.webp'
import image3 from '../../assets/images/en-iyi-akilli-telefonlar-37.webp'
import image4 from '../../assets/images/en-ucuz-4k-tvler-34.webp'
import image5 from '../../assets/images/robot-supurge-50.webp'

export default function Carousel() {
    return (
        <div className='carousel col-sm-8'>
            <div className='carouselMainImage border mb-1'>
                <img className='img-fluid' src={image1} alt="" />
            </div>
            <div className='carouselSubImages'>
                <div className='subImages border'>
                    <img className='img-fluid' src={image1} alt="" />
                </div>
                <div className='subImages border'>
                    <img className='img-fluid' src={image2} alt="" />
                </div>
                <div className='subImages border'>
                    <img className='img-fluid' src={image3} alt="" />
                </div>
                <div className='subImages border'>
                    <img className='img-fluid' src={image4} alt="" />
                </div>
                <div className='subImages border'>
                    <img className='img-fluid' src={image5} alt="" />
                </div>
            </div>
        </div>
    )
}
