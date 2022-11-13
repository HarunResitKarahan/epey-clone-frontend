import axios from 'axios';
import React from 'react'
import CategorySelect from './CategorySelect';

function EditPopUp(props) {
    const apiUrl = "http://localhost:8586/"
    const editProduct = (e) => {
        let reader = new FileReader()
        let buf = undefined
        reader.onloadend = function () {
            buf = reader.result
            axios.put(apiUrl + 'api/Product/' + props.selectedProduct, {
                productId: Number(props.selectedProduct),
                productName: String(e.target[0].value),
                productPrice: Number(e.target[1].value),
                subCategoryId: Number(e.target[2].value),
                productPicture: buf
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
        reader.readAsDataURL(e.target[3].files[0]);

    }
    return (
        <div className='PopUp' onMouseDown={(e) => { if (e.target.className === 'PopUp') props.setShowEditPopUp(false) }}>
            <form onSubmit={(e) => { e.preventDefault(); editProduct(e) }} className='PopUpCard p-3 rounded'>
                <h5 className='mb-3'>Ürünü Güncelle</h5>
                <input type="text" className='form-control mb-2' placeholder='Ürün Adı' required />
                <input type="text" className='form-control mb-2' placeholder='Fiyatı' required />
                <CategorySelect subCategorys={props.subCategorys}></CategorySelect>
                <div onClick={() => document.querySelector('input[name="edit-choose-file"]').click()} className='border rounded d-flex align-items-center justify-content-center mt-2'
                    style={{
                        width: "100%",
                        height: "38px",
                        padding: "6px 12px",
                        cursor: "pointer",
                        backgroundColor: "#f6f6f6",
                        position: "relative",
                        overflow: "hidden"
                    }}>
                    <div className='me-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-cloud-plus" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z" />
                            <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                        </svg>
                    </div>
                    <div>
                        Resim Yükle
                    </div>
                    <input type="file" id="choose-file" name="edit-choose-file" accept="image/*" required />
                </div>
                <button type='submit' className='btn btn-primary w-100 mt-2'>Güncelle</button>
            </form>
        </div>
    )
}

export default EditPopUp