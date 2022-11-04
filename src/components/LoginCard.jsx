import React, { useState } from 'react'

function LoginCard() {
    const [changeCard, setChangeCard] = useState(true)
    return (
        <div className='d-flex flex-column justify-content-center align-items-center mt-4 p-2 m-auto' style={{ width: "fit-content", }}>
            <div className='d-flex'>
                <div className='LoginButton py-2 px-5 me-1 rounded' onClick={() => setChangeCard(true)}>
                    Giriş
                </div>
                <div className='signInButton py-2 px-5 ms-1 rounded' onClick={() => setChangeCard(false)}>
                    Üye Ol
                </div>
            </div>
            {changeCard ?
                <form className='Login mt-4' onSubmit={(e) => e.preventDefault()}>
                    <div className='eMail'>
                        <input className='p-2 mb-3' id="" type="email" placeholder='E-posta' required />
                    </div>
                    <div className='password'>
                        <input className='p-2' id="" type="password" placeholder='Şifre' required />
                    </div>
                    <button className='submit mt-2 p-2'>
                        Giriş
                    </button>
                    <div className='extraInfo d-flex mt-1'>
                        <div className='d-flex' style={{ cursor: "pointer" }}>
                            <input type="checkbox" name="remindMe" id="remindMe" style={{ cursor: "pointer" }} />
                            <label htmlFor="remindMe" style={{ cursor: "pointer" }}>Beni Hatırla</label>
                        </div>
                        <div className='forgetMyPassword ms-auto'>
                            Şifremi Unuttum
                        </div>
                    </div>
                </form> :
                <form className='Login mt-4' onSubmit={(e) => e.preventDefault()}>
                    <div className='name'>
                        <input className='p-2 mb-3' id="name" type="text" placeholder='Ad Soyad' required />
                    </div>
                    <div className='eMail'>
                        <input className='p-2 mb-3' id="eMail" type="email" placeholder='E-posta' required />
                    </div>
                    <div className='password'>
                        <input className='p-2' id="password" type="password" placeholder='Şifre' required />
                    </div>
                    <button className='submit mt-2 p-2'>
                        Kayıt Ol
                    </button>
                    <div className='extraInfo d-flex mt-1'>
                        <div className='d-flex' style={{ cursor: "pointer" }}>
                            <input type="checkbox" name="remindMe" id="remindMe" style={{ cursor: "pointer" }} />
                            <label htmlFor="remindMe" style={{ cursor: "pointer" }}>Beni Hatırla</label>
                        </div>
                        <div className='forgetMyPassword ms-auto'>
                            Şifremi Unuttum
                        </div>
                    </div>
                </form>}
        </div>
    )
}

export default LoginCard