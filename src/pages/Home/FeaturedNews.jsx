import React from 'react'
import './FeaturedNews.css'

function FeaturedNews() {
    return (
        <div className='featuredNews col-sm-4 ps-0 mt-2 mt-sm-0'>
            <div className='featuredNewsList'>
                {[...Array(9)].map((e, i) => (
                    <div key={i} className='featuredNewsItems'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#d96140" className="bi bi-caret-right-fill me-1" viewBox="0 0 16 16">
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                        </svg>
                        <div className='featuredNewsItemsContent w-100 p-2 mb-2 mb-sm-0'>
                            <p>En Ucuz Sıcak Hava Fritözleri (Air Fryer)</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeaturedNews