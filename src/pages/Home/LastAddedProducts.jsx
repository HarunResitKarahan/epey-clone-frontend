import React from 'react'
import './LastAddedProducts.css'
import productImage from '../../assets/images/b_philips-xc8049-01-1.webp'

function LastAddedProducts() {
    return (
        <div className='lastAddedProducts p-2 py-1 mt-4 border'>
            <h5 className='py-2'>Son Eklenen Ürünler</h5>
            <div className='row'>
                {[...Array(6)].map((e, i) => (
                    <div key={i} className='lastAddedProductsItems col-sm-4 mb-2 rounded' >
                        <div className='lastAddedProductsItem p-2 py-4'>
                            <div className='productImage'>
                                <img src={productImage} alt="" />
                            </div>
                            <div className='productSpecs px-2'>
                                <p className='header mb-1'>Philips XC8049/01 Şarjlı Süpürge</p>
                                <div className='h-100 d-flex flex-column justify-content-between'>
                                    <p style={{ textAlign: "left", fontSize: "12px" }}>Ürün Markası: <span style={{ fontWeight: "400" }}>Philips</span></p>
                                    <p style={{ textAlign: "left", fontSize: "12px" }}>Üretim Yılı: <span style={{ fontWeight: "400" }}>2022</span></p>
                                    <p style={{ textAlign: "left", fontSize: "12px" }}>Garanti Süresi: <span style={{ fontWeight: "400" }}>4 Yıl</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LastAddedProducts