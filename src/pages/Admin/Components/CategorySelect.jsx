import React from 'react'

function CategorySelect(props) {
    return (
        <select className="form-select" aria-label="Default select example" required>
            {props.subCategorys.map((e, i) => (
                <option key={i} value={e.subCategoryId}>{e.subCategoryName}</option>
            ))}
        </select>
    )
}

export default CategorySelect