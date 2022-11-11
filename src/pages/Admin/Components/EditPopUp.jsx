import axios from 'axios';
import React from 'react'

function EditPopUp(props) {
    const apiUrl = "http://localhost:8586/"
    const editProduct = (e) => {
        axios.put(apiUrl + 'api/Product/' + props.selectedProduct, {
            productId: Number(props.selectedProduct),
            productName: String(e.target[0].value),
            productPrice: Number(e.target[1].value),
            subCategoryId: Number(e.target[2].value)
        })
            .then(function (response) {
                console.log(response)
                if (response.status === 204) {
                    props.setShowEditPopUp(false)
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className='EditPopUp' onMouseDown={(e) => { if (e.target.className === 'EditPopUp') props.setShowEditPopUp(false) }}>
            <form onSubmit={(e) => { e.preventDefault(); editProduct(e) }} className='EditPopUpCard p-3 rounded'>
                <h5 className='mb-3'>Ürünü Güncelle</h5>
                <input type="text" className='form-control mb-2' placeholder='Ürün Adı' required />
                <input type="text" className='form-control mb-2' placeholder='Fiyatı' required />
                <select className="form-select" aria-label="Default select example" required>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <button type='submit' className='btn btn-primary w-100 mt-2'>Güncelle</button>
            </form>
        </div>
    )
}

export default EditPopUp