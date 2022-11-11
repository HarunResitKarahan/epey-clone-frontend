import React from 'react'

function DeletePopUp(props) {
    return (
        <div className='PopUp' onMouseDown={(e) => { if (e.target.className === 'PopUp') props.setShowDeletePopUp(false) }}>
            <div className='PopUpCard'>
                <h5>Uyarı</h5>
                <div>
                    Silmek İstediğinize Emin misiniz ?
                </div>
                <div>
                    <div>
                        Evet
                    </div>
                    <div>
                        Hayır
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeletePopUp