import React from 'react'
import './LastAddedProducts.css'
import productImage from '../../assets/images/b_philips-xc8049-01-1.webp'

function LastAddedProducts() {
    return (
        <div className='lastAddedProducts p-2 py-1 mt-4 border'>
            <h5>Son Eklenen Ürünler</h5>
            <div className='row'>
                {[...Array(6)].map((e, i) => (
                    <div key={i} className='lastAddedProductsItems col-sm-4 mb-2' >
                        <div className='lastAddedProductsItem p-2'>
                            <div className='productImage'>
                                <img src={productImage} alt="" />
                            </div>
                            <div className='productSpecs'>
                                <p>Philips XC8049/01 Şarjlı Süpürge</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LastAddedProducts