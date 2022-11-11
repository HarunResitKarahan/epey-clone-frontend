import React, { useEffect } from 'react'
import AdminPanelContent from './AdminPanelContent';
import AdminPanelMenu from './AdminPanelMenu';

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
            <div className='row'>
                <div className="col-sm-2">
                    <AdminPanelMenu></AdminPanelMenu>
                </div>
                <div className="col-sm-10">
                    <AdminPanelContent></AdminPanelContent>
                </div>
            </div>
        </div>
    )
}

export default Admin