import React from 'react'

function LoginCard() {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center mt-4 p-2 m-auto' style={{ width: "fit-content", }}>
            <div className='d-flex'>
                <div className='LoginButton py-2 px-5 me-1 rounded'>
                    Giriş
                </div>
                <div className='signInButton py-2 px-5 ms-1 rounded'>
                    Üye Ol
                </div>
            </div>
            <div className='Login mt-4'>
                <div className='eMail'>
                    <input className='p-2 mb-3' id="" type="email" placeholder='E-posta' />
                </div>
                <div className='password'>
                    <input className='p-2' id="" type="password" placeholder='Şifre' />
                </div>
            </div>
        </div>
    )
}

export default LoginCard