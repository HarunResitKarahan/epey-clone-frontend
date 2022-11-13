import React from 'react'

function ListedItems(props) {
    return (
        <div className='col-sm-8 col-lg-9'>
            {props.categoryId}
            {props.products
                .filter((e) => Number(e.subCategoryId) === Number(props.categoryId))
                .map((elmnt, i) => (
                    <p key={i}>{elmnt.productName}</p>
                ))
            }
        </div>
    )
}

export default ListedItems