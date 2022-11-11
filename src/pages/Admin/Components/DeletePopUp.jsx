import axios from 'axios';
import React from 'react'

function DeletePopUp(props) {
    const apiUrl = "http://localhost:8586/"
    return (
        <div className='PopUp' onMouseDown={(e) => { if (e.target.className === 'PopUp') props.setShowDeletePopUp(false) }}>
            <div className='PopUpCard p-3'>
                <h5>Uyarı</h5>
                <div className='text-secondary p-2' style={{ fontSize: "18px", fontWeight: "500" }}>
                    Silmek İstediğinize Emin misiniz ?
                </div>
                <div className='d-flex align-items-center justify-content-end'>
                    <div className='p-2 pe-0'>
                        <button className='btn btn-success' onClick={(e) => { axios.delete(apiUrl + 'api/Product/' + props.selectedProduct); props.setShowDeletePopUp(false) }}>Evet</button>
                    </div>
                    <div className='p-2 pe-0'>
                        <button className='btn btn-danger' onClick={(e) => props.setShowDeletePopUp(false)}>Hayır</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeletePopUp