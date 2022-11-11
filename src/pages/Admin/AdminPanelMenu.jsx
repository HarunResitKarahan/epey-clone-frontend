import React from 'react'
import logo from '../../assets/images/logo.webp'

function AdminPanelMenu() {
    return (
        <div className='panelMenu p-2'>
            <div className='panelLogo d-flex justify-content-center'>
                <img className='img-fluid' src={logo} width="100" alt='asd' />
            </div>
        </div>
    )
}

export default AdminPanelMenu