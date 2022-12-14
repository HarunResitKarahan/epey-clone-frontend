import React, { useEffect, useState } from 'react'
import logo from '../assets/images/logo.webp'
import { useHistory } from "react-router-dom";
// import { Link } from 'react-router-dom';
import './Navbar.css'
import SubNavbar from './SubNavbar'
import axios from 'axios';

function Navbar() {
    // let navigate = useHistory();
    const apiUrl = "http://localhost:8586/"
    const [isLogin, setIsLogin] = useState(false)
    const [userData, setUserData] = useState([])
    let history = useHistory();
    const routeChange = () => {
        history.push(`UyeGirisi`);
    }
    const routeHomeChange = () => {
        history.push(``);
    }
    useEffect(() => {
        let user = localStorage.getItem('user')
        if (user !== null) {
            axios.get(apiUrl + 'api/Users/' + user)
                .then(function (response) {
                    if (response.status === 200) {
                        setIsLogin(true)
                        setUserData(response.data)
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }, [])

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-light py-0">
                <div className="container-fluid py-3">
                    <img className="img-fluid" style={{ height: "40px", cursor: "pointer" }} src={logo} alt="" onClick={routeHomeChange} />
                    <div className='searchBox d-none d-sm-flex ms-3 w-100'>
                        <input type="text" className='w-100 p-2' placeholder='sitede ara' />
                        <div className='searchIcon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </div>
                    </div>
                    <div className='SignLogin ms-2 p-1' onClick={isLogin ? undefined : routeChange}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#d96140" className="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>
                        <div className='mx-1'>
                            {isLogin ?
                                <>
                                    <p>Hesab??m</p>
                                    <p>{userData.userName}</p>
                                </>
                                :
                                <>
                                    <p className='asd'>Giri?? Yap</p>
                                    <p className='asd'>veya ??ye Ol</p>
                                </>
                            }
                        </div>
                        {isLogin ?
                            <>
                                <div className='ms-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#d96140" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                    </svg>
                                </div>
                                <div className="subSignLogin">
                                    <p onClick={() => { localStorage.removeItem('user'); setIsLogin(false) }} className='p-2' style={{ fontSize: "14px", fontWeight: "500", textAlign: "center" }}>????k???? Yap</p>
                                </div>
                            </>
                            : ''}
                    </div>
                </div>
            </nav>
            <SubNavbar></SubNavbar>
        </>
    )
}

export default Navbar