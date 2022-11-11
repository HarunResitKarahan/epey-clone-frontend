import React from 'react'

function EditPopUp(props) {
    return (
        <div className='EditPopUp'>
            <form onSubmit={(e) => e.preventDefault()} className='EditPopUpCard p-3 rounded'>
                <h5 className='mb-3'>Ürünü Güncelle</h5>
                <input type="text" className='form-control mb-2' placeholder='Ürün Adı' required />
                <input type="text" className='form-control mb-2' placeholder='Fiyatı' required />
                <select className="form-select" aria-label="Default select example" required>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <button type='submit' className='btn btn-primary w-100 mt-2'>Kaydet</button>
            </form>
        </div>
    )
}

export default EditPopUp