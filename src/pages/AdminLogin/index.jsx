import axios from 'axios'
import React from 'react'
import { useHistory } from 'react-router-dom'
import './style.css'

function AdminLogin() {
    const apiUrl = "http://localhost:8586/"
    const history = useHistory();

    const fetchLogin = () => {
        const adminNameValue = document.querySelector('#adminName').value
        const adminUserPasswordValue = document.querySelector('#adminPassword').value
        axios.post(apiUrl + 'api/AdminUsers/CheckUser', {
            adminUserName: adminNameValue,
            adminUserPassword: adminUserPasswordValue
        })
            .then(function (response) {
                if (response.data === "Giriş Başarılı") {
                    localStorage.setItem('token', adminNameValue);
                    history.push('AdminPanel')
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className="App">
            <div className='logincard p-2 border shadow'>
                <div className='d-flex align-items-center mb-3'>
                    <div className='me-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
                            <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                        </svg>
                    </div>
                    <div>
                        <h5 className='m-0'>Giriş Yap</h5>
                    </div>
                </div>
                <form onSubmit={(e) => { e.preventDefault(); fetchLogin(); }}>
                    <input id='adminName' type="text" className="form-control mb-2" placeholder="Kullanıcı Adı" aria-label="Username" aria-describedby="basic-addon1" required autoComplete="nope" />
                    <input id='adminPassword' type="password" className="form-control" placeholder="Şifre" aria-label="Password" aria-describedby="basic-addon1" autoComplete='none' required />
                    <button type='submit' className="btn btn-primary my-2 py-2">Giriş Yap</button>
                </form>
            </div>
        </div>
    )
}

export default AdminLogin