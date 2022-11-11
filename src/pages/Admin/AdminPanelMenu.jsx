import React from 'react'
import logo from '../../assets/images/logo2.webp'

function AdminPanelMenu() {
    return (
        <div className='py-3'>
            <div className='panelLogo d-flex justify-content-center'>
                <img className='img-fluid' src={logo} width="100" alt='asd' />
            </div>
        </div>
    )
}

export default AdminPanelMenu