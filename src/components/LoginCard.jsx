import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import AlertPopUp from './AlertPopUp';

function LoginCard() {
    const [changeCard, setChangeCard] = useState(true)
    const apiUrl = "http://localhost:8586/"
    let history = useHistory()
    const [alertMessage, setAlertMessage] = useState('')
    useEffect(() => {
        if (localStorage.getItem('user') !== null) {
            history.push('')
        }
    })
    useEffect(() => {
        if (alertMessage !== '') {
            const alert = document.querySelector('.alertPopUp')
            setTimeout(() => {
                alert.style.bottom = '72px'
            }, 50);
            setTimeout(() => {
                // const alert = document.querySelector('.alertPopUp')
                alert.style.bottom = '-99px'
                setAlertMessage('')
            }, 3000);
        }
        // alert.style.bottom = '10px'
    }, [alertMessage])

    const changeButtonStyle = () => {
        // console.log(window.event.target)
        const buttons = document.querySelectorAll('.Buttons')
        for (let item of buttons) {
            if (window.event.target !== item) {
                item.style.backgroundColor = '#fff'; item.style.color = 'black'
            } else {
                item.style.backgroundColor = '#d96140'; item.style.color = 'white'
            }
        }
    }
    const sendRegisterRequest = (e) => {
        // console.log(e.target)
        const formElement = e.target;
        const userName = formElement[0].value
        const userLoginName = formElement[1].value
        const userMail = formElement[2].value
        const userPassword = formElement[3].value

        axios.post(apiUrl + 'api/Users', {
            userLoginName: userLoginName,
            userName: userName,
            userPassword: userPassword,
            userMail: userMail
        })
            .then(function (response) {
                console.log(response)
                if (response.status === 201) {
                    for (let item of formElement) {
                        item.value = ''
                    }
                    history.push('')
                    setAlertMessage(response.data)
                }
            })
            .catch(function (error) {
                console.log(error);
                setAlertMessage("Sunucuya Erişilemiyor")
            });

    }
    const sendLoginRequest = (e) => {
        const formElement = e.target;
        const userLoginName = formElement[0].value
        const userPassword = formElement[1].value
        axios.post(apiUrl + 'api/Users/CheckUser', {
            userLoginName: userLoginName,
            userPassword: userPassword
        })
            .then(function (response) {
                // console.log(response)
                if (response.data === "Giriş Başarılı") {
                    for (let item of formElement) {
                        item.value = ''
                    }
                    setAlertMessage(response.data)
                    localStorage.setItem('user', userLoginName)
                    history.push('')
                } else {
                    setAlertMessage(response.data)
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className='d-flex flex-column justify-content-center align-items-center mt-4 p-2 m-auto' style={{ width: "fit-content", }}>
            <div className='d-flex'>
                <div className='LoginButton Buttons py-2 px-5 me-1 rounded' onClick={() => { setChangeCard(true); changeButtonStyle(); }}>
                    Giriş
                </div>
                <div className='signInButton Buttons py-2 px-5 ms-1 rounded' onClick={() => { setChangeCard(false); changeButtonStyle(); }}>
                    Üye Ol
                </div>
            </div>
            {changeCard ?
                <form className='Login mt-4' onSubmit={(e) => { e.preventDefault(); sendLoginRequest(e) }}>
                    <div className='eMail'>
                        <input className='p-2 mb-3' type="text" placeholder='Kullanıcı Adı' required />
                    </div>
                    <div className='password'>
                        <input className='p-2' type="password" placeholder='Şifre' required />
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
                <form className='Login mt-4' onSubmit={(e) => { e.preventDefault(); sendRegisterRequest(e); }}>
                    <div className='name'>
                        <input className='p-2 mb-3' id="name" type="text" placeholder='Ad Soyad' required />
                    </div>
                    <div className='name'>
                        <input className='p-2 mb-3' id="loginName" type="text" placeholder='Kullanıcı Adı' required />
                    </div>
                    <div className='eMail'>
                        <input className='p-2 mb-3' id="eMail" type="email" placeholder='E-posta' required />
                    </div>
                    <div className='password'>
                        <input className='p-2' id="password" type="password" placeholder='Şifre' required />
                    </div>
                    <button type='submit' className='submit mt-2 p-2'>
                        Kayıt Ol
                    </button>
                </form>}
            {alertMessage !== '' ? <AlertPopUp alertMessage={alertMessage}></AlertPopUp> : undefined}
        </div>
    )
}

export default LoginCard