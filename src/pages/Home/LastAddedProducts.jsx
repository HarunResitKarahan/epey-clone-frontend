import React from 'react'
import './LastAddedProducts.css'
// import productImage from '../../assets/images/b_philips-xc8049-01-1.webp'

function LastAddedProducts(props) {
    return (
        <>
            <div className='lastAddedProducts p-2 py-1 mt-4 rounded'>
                <div className='d-flex align-items-center py-2 mb-2'>
                    <h5 className='m-0'>Son Eklenen Ürünler</h5>
                    <span className='ms-auto' style={{ cursor: "pointer", color: "#d96140", fontWeight: "500" }}>Tümü ❯</span>
                </div>
                <div className='row justify-content-center'>
                    {props.products.map((e, i) => (
                        <div key={i} className='lastAddedProductsItems col-sm-4 mb-2 rounded' >
                            <div className='lastAddedProductsItem d-lg-flex p-2 py-3'>
                                <div className='productImage'>
                                    <img src={e.productPicture} className='rounded' alt="" width={210} height={140} />
                                </div>
                                <div className='productSpecs px-2'>
                                    <p className='header mb-3 mt-2 mt-lg-0'>{e.productName}</p>
                                    <div className='h-100 d-flex flex-column justify-content-between'>
                                        <p style={{ textAlign: "left", fontSize: "12px" }}>Ürün Markası: <span style={{ fontWeight: "400" }}>{e.productBrand}</span></p>
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

export default LastAddedProducts