import React from 'react'
import logo from '../../assets/images/logo2.webp'

function AdminPanelMenu() {
    return (
        <div className='py-3'>
            <div className='panelLogo d-flex justify-content-center mb-5'>
                <img className='img-fluid' src={logo} width="100" alt='asd' />
            </div>
            <div className='panelMenuItem'>
                <div className='panelMenuItems p-2'>
                    <div className='mx-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-columns" viewBox="0 0 16 16">
                            <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2zm8.5 0v8H15V2H8.5zm0 9v3H15v-3H8.5zm-1-9H1v3h6.5V2zM1 14h6.5V6H1v8z" />
                        </svg>
                    </div>
                    <div>
                        DashBoard
                    </div>
                </div>
                <div className='panelMenuItems p-2'>
                    <div className='mx-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg>
                    </div>
                    <div>
                        Ürün Düzenle
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminPanelMenu