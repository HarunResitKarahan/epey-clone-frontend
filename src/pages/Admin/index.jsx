import React, { useEffect } from 'react'

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
        <div className='App'>Admin</div>
    )
}

export default Admin