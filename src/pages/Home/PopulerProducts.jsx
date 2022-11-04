import React from 'react'
import productImage from '../../assets/images/k_samsung-galaxy-a04e-1.webp'

function PopulerProducts() {
    return (
        <>
            <div className='lastAddedProducts p-2 py-1 mt-4 rounded'>
                <div className='d-flex align-items-center py-2 mb-2'>
                    <h5 className='m-0'>Popüler Ürünler</h5>
                    <span className='ms-auto' style={{ cursor: "pointer", color: "#d96140", fontWeight: "500" }}>Tümü ❯</span>
                </div>
                <div className='row'>
                    {[...Array(6)].map((e, i) => (
                        <div key={i} className='lastAddedProductsItems col-sm-4 mb-2 rounded' >
                            <div className='lastAddedProductsItem d-lg-flex p-3'>
                                <div className='productImage me-3'>
                                    <img src={productImage} alt="" />
                                </div>
                                <div className='productSpecs px-2'>
                                    <p className='header mb-3 mt-2 mt-lg-0'>Philips XC8049/01 Şarjlı Süpürge</p>
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
        </>
    )
}

export default PopulerProducts