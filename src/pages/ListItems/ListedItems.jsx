import React from 'react'

function ListedItems(props) {
    const filteredProducts = props.products.filter((e) => Number(e.subCategoryId) === Number(props.categoryId))
    return (
        <div className='col-sm-8 col-lg-9'>
            {
                filteredProducts.map((elmnt, i) => (
                    <p key={i}>{elmnt.productName}</p>
                ))
            }
            {filteredProducts.length === 0 ?
                <div>Ürün yok</div>
                : ''}
        </div>
    )
}

export default ListedItems