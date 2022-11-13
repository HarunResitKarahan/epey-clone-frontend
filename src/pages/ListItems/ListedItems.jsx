import React from 'react'

function ListedItems(props) {
    return (
        <div className='col-sm-8 col-lg-9'>
            {props.categoryName}
        </div>
    )
}

export default ListedItems