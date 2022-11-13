import React from 'react'

function ListedItems(props) {
    const filteredProducts = props.products.filter((e) => Number(e.subCategoryId) === Number(props.categoryId))
    return (
        <div className='col-sm-8 col-lg-9'>
            {filteredProducts.length === 0 ?
                <div className='m-auto h-100 d-flex justify-content-center align-items-center'>
                    <p style={{ fontSize: "400%", color: "rgb(220 219 219)" }}>Ürün Yok</p>
                </div>
                : <table className="table rounded">
                    <thead className='border' style={{ backgroundColor: '#f8f4e0' }}>
                        <tr className='headers'>
                            <th scope='col'>Ürün Resmi</th>
                            <th scope="col">Ürün Adı</th>
                            <th scope="col">Fiyat</th>
                            <th scope="col">Kategori</th>
                            <th scope="col-1"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProducts.map((e, i) => (
                            <tr key={i}>
                                <td style={{ width: "160px" }}><img className='rounded' style={{ maxWidth: "100%", objectFit: "unset" }} src={e.productPicture} width={150} height={100} alt="" /></td>
                                <td className='tableProductName'>{e.productName}</td>
                                <td>{e.productPrice} ₺</td>
                                {/* <td></td> */}
                                {props.subCategorys
                                    .filter(element => element.subCategoryId === e.subCategoryId)
                                    .map((elmnt, index) => (
                                        <td key={index}>{elmnt.subCategoryName}</td>
                                    ))
                                }
                            </tr>
                        ))}
                    </tbody>
                </table>}
        </div>
    )
}

export default ListedItems