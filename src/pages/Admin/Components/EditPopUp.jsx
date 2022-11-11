import React from 'react'

function EditPopUp(props) {
    return (
        <div className='EditPopUp'>
            <div className='EditPopUpCard p-3 rounded'>
                <h5 className='mb-3'>Ürünü Güncelle</h5>
                <input type="text" className='form-control mb-2' placeholder='Ürün Adı' />
                <input type="text" className='form-control mb-2' placeholder='Fiyatı' />
                <input type="text" className='form-control mb-2' placeholder='Kategori' />
                <button type='submit' className='btn btn-primary w-100 mt-2'>Kaydet</button>
            </div>
        </div>
    )
}

export default EditPopUp