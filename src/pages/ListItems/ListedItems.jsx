import React from 'react'

function ListedItems(props) {
    return (
        <div className='col-sm-8 col-lg-9'>
            {props.categoryName}
            {/* {props.products.filter(e=>)} */}
        </div>
    )
}

export default ListedItems