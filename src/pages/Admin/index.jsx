import React, { useEffect } from 'react'
import AdminPanelContent from './AdminPanelContent';
import AdminPanelMenu from './AdminPanelMenu';
import './style.css'

function Admin(props) {
    // props.history.push('AdminLogin')
    useEffect(() => {
        const tokenString = localStorage.getItem('token');
        let history = props.history
        if (tokenString === null) {
            history.push('AdminLogin')
        }
    })

    return (
        <div className='App'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className="col-sm-3 col-lg-2 panelMenu px-0">
                        <AdminPanelMenu history={props.history}></AdminPanelMenu>
                    </div>
                    <div className="col-sm-9 col-lg-10">
                        <AdminPanelContent></AdminPanelContent>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin