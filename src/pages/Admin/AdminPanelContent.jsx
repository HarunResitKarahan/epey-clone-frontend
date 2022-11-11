import React from 'react'
import AdminPanelNavbar from './Components/AdminPanelNavbar'
// import Navbar from '../../components/Navbar'

function AdminPanelContent() {
    return (
        <>
            <AdminPanelNavbar></AdminPanelNavbar>
            <div className='container'>
                <h5 className='my-3'>Panel Genel Görünüm</h5>
            </div>
        </>
    )
}

export default AdminPanelContent