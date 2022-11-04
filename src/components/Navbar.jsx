import React from 'react'
import logo from '../assets/images/logo.webp'
// import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    // const categorys = [{
    //     "TELEFON": [
    //         {
    //             "Akıllı Telefon": ['Xiaomi Telefon', 'Huawei Telefon', 'Samsung Telefon', 'iPhone Telefon']
    //         },
    //         "Tuşlu Telefon",
    //         "Telsiz Telefon",
    //         "Kulaklık",
    //         "Akıllı Saat",
    //         "PowerBank",
    //         "Şarj Aleti",
    //         "Sarj Kablosu",
    //         "Santral",
    //         "Sanal Gerçeklik Gözlüğü"
    //     ]
    // },
    // {
    //     "EV-YAŞAM-BAHÇE": [
    //         {
    //             "Beyaz Eşya": [{
    //                 "Yıkama-Kurutma": ['Bulaşuk Makinesi', "Çamaşır Makinesi", "Kurutma Makinesi"],
    //                 "Soğutma-Dondurma": ['Buzdolabı', 'Derin Dondurucu', 'Su Sebili'],
    //                 "Pişirme": ['Ocak', 'Fırın', 'Mini Fırın', "Mikrodalga Fırın", "Davlumbaz ve Aspiratör"]
    //             }]
    //         }
    //     ]
    // }]
    // console.log(categorys)
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-light py-0">
                <div className="container-fluid py-3">
                    <img className="img-fluid" style={{ height: "40px" }} src={logo} alt="" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                        aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className='searchBox ms-3 w-100'>
                        <input type="text" className='w-100 p-2' placeholder='sitede ara' />
                        <div className='searchIcon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </div>
                    </div>
                    <div className='SignLogin ms-2 p-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#d96140" className="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>
                        <div className='ms-1'>
                            <p>Giriş Yap</p>
                            <p>veya Üye Ol</p>
                        </div>
                        <div className='ms-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#d96140" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </nav>
            <div className='subNavbar'>
                <div className='subNavbarItems p-2'>
                    <p>TELEFON</p>
                </div>
                <div className='subNavbarItems p-2'>
                    <p>EV-YAŞAM-BAHÇE</p>
                </div>
                <div className='subNavbarItems p-2'>
                    <p>BİLGİSAYAR-TABLET</p>
                </div>
            </div>
        </>
    )
}

export default Navbar