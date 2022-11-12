import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AdminPanelNavbar from './Components/AdminPanelNavbar'
import CategorySelect from './Components/CategorySelect'
import DeletePopUp from './Components/DeletePopUp'
import EditPopUp from './Components/EditPopUp'
// import Navbar from '../../components/Navbar'

function AdminPanelContent(props) {
    const apiUrl = "http://localhost:8586/"
    const tds = document.querySelectorAll('td')
    let trs = document.querySelectorAll('tr')
    const [showEditPopUp, setShowEditPopUp] = useState(false)
    const [showDeletePopUp, setShowDeletePopUp] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(0)
    const [products, setProducts] = useState([])
    const [subCategorys, setSubCategorys] = useState([])
    const [users, setUsers] = useState([])
    let parse = require('html-react-parser')
    useEffect(() => {
        getProudcts()
        getSubCategories()
        getUsers()
    }, [])
    useEffect(() => {
        getProudcts()
        getSubCategories()

    }, [showEditPopUp, showDeletePopUp])
    const getProudcts = () => {
        axios.get(apiUrl + 'api/Product')
            .then(function (response) {
                setProducts(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const getSubCategories = () => {
        axios.get(apiUrl + 'api/SubCategories')
            .then(function (response) {
                setSubCategorys(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const getUsers = () => {
        axios.get(apiUrl + 'api/Users')
            .then(function (response) {
                setUsers(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const addProduct = (e) => {
        // console.log(e.target[3].value)
        let reader = new FileReader()
        let buf = undefined
        reader.onloadend = function () {
            // console.log(reader.result)
            // buf = Buffer.from(reader.result, 'base64');
            buf = reader.result
            axios.post(apiUrl + 'api/Product/', {
                productName: String(e.target[0].value),
                productPrice: Number(e.target[1].value),
                subCategoryId: Number(e.target[2].value),
                productPicture: buf
            })
                .then(function (response) {
                    getProudcts()
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        reader.readAsDataURL(e.target[3].files[0]);
        // console.log(buf)
    }
    const searchTable = (e) => {
        let eventValue = e.target.value
        // console.log(eventValue)
        // console.log(trs)
        if (eventValue !== '') {
            for (let element of tds) {
                let elementValue = element.innerText
                if (element.className !== 'buttons') {
                    if (elementValue.includes(eventValue)) {
                        for (let elmnt of trs) {
                            // console.log(elmnt)
                            if (element.parentNode !== elmnt && elmnt.className !== 'headers') {
                                elmnt.style.display = 'none'
                            } else {
                                elmnt.style.display = 'table-row'
                            }
                        }
                    }
                }
            }
        } else {
            for (let elmnt of trs) {
                elmnt.style.display = 'table-row'
            }
        }
        // console.log(tds)
    }

    const generalCard = [
        {
            title: "Ürün Sayısı",
            count: products.length,
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-archive" viewBox="0 0 16 16">
                    <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                </svg>`
        },
        {
            title: "Üye Sayısı",
            count: users.length,
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-person-video" viewBox="0 0 16 16">
                    <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                    <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2Zm10.798 11c-.453-1.27-1.76-3-4.798-3-3.037 0-4.345 1.73-4.798 3H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1.202Z"/>
                </svg>`
        },
        {
            title: "Kategori Sayısı",
            count: subCategorys.length,
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-tags" viewBox="0 0 16 16">
                    <path d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z"/>
                    <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z"/>
                    </svg>`
        },
    ]
    return (
        <>
            <AdminPanelNavbar></AdminPanelNavbar>
            <div className='container'>
                <h3 className='my-4 text-secondary'>Panel Genel Bilgi</h3>
                <div className='generalCard row'>
                    {generalCard.map((e, i) => (
                        <div key={i} className='generalCards col-md-4 mb-2 m-md-0'>
                            <div className='content p-5 d-flex justify-content-center flex-column align-items-center'>
                                <div className='mb-2'>
                                    {parse(String(e.svg))}
                                </div>
                                <h4 align="center">{e.title}</h4>
                                <h3>{e.count}</h3>
                            </div>
                        </div>
                    ))}
                </div>
                <h3 className='my-4 text-secondary'>Ürünler</h3>
                <form className='addProduct p-3' onSubmit={(e) => { e.preventDefault(); addProduct(e) }}>
                    <div className='d-flex mx-auto'>
                        <div className='me-2'>
                            <input type="text" className="form-control" placeholder="Ürün İsmi" aria-label="ProductName" aria-describedby="basic-addon1" required />
                        </div>
                        <div className='me-2'>
                            <input type="number" className="form-control" placeholder="Ürün Fiyatı" aria-label="ProductPrice" aria-describedby="basic-addon1" required />
                        </div>
                        <div className='me-2'>
                            <CategorySelect subCategorys={subCategorys}></CategorySelect>
                        </div>
                        <div className='me-2'>
                            <div onClick={() => document.querySelector('#choose-file').click()} className='border rounded d-flex align-items-center justify-content-center'
                                style={{
                                    width: "170px",
                                    height: "38px",
                                    padding: "6px 12px",
                                    cursor: "pointer",
                                    backgroundColor: "#f6f6f6",
                                    position: "relative",
                                    overflow: "hidden"
                                }}>
                                <div className='me-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-cloud-plus" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z" />
                                        <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                                    </svg>
                                </div>
                                <div>
                                    Resim Yükle
                                </div>
                                <input type="file" id="choose-file" name="choose-file" accept="image/*" required />
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-success">Ürün Ekle <strong>+</strong></button>
                        </div>
                    </div>
                </form>
                <div className='addProduct flex-column mt-2 p-3'>
                    <div className='productSearch w-100 my-2 mb-4'>
                        <input type="text" className="form-control py-2" onChange={(e) => searchTable(e)} placeholder="Arama Yapın..." aria-label="ProductSearch" aria-describedby="basic-addon1" />
                    </div>
                    <table className="table border rounded">
                        <thead className='table-light'>
                            <tr className='headers'>
                                <th scope="col">#</th>
                                <th scope='col'>Ürün Resmi</th>
                                <th scope="col">Ürün Adı</th>
                                <th scope="col">Fiyat</th>
                                <th scope="col">Kategori</th>
                                <th scope="col-1"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((e, i) => (
                                <tr key={i}>
                                    <th scope="row">{i + 1}</th>
                                    <td><img className='img-fluid' src={e.productPicture} height={70} width={70} alt="" /></td>
                                    <td>{e.productName}</td>
                                    <td>{e.productPrice} ₺</td>
                                    {/* <td></td> */}
                                    {subCategorys
                                        .filter(element => element.subCategoryId === e.subCategoryId)
                                        .map((elmnt, index) => (
                                            <td key={index}>{elmnt.subCategoryName}</td>
                                        ))
                                    }
                                    <td className='buttons' style={{ width: "210px", whiteSpace: "nowrap" }}>
                                        <div className='productEdit'>
                                            <div className='selection'>
                                                <button id={e.productId} className='btn me-2' onClick={(e) => { setSelectedProduct(e.target.id); setShowEditPopUp(true) }}>Güncelle</button>
                                                <button id={e.productId} className='btn btn-danger me-2' onClick={(e) => { setSelectedProduct(e.target.id); setShowDeletePopUp(true) }}>Sil</button>
                                            </div>
                                            <div className='moreSelection dropdown ms-auto'>
                                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><div className="dropdown-item">Öne Çıkanlara Ekle</div></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <h3 className='my-4 text-secondary'>Öne Çıkan Ürünler</h3>
                <div>
                    asd
                </div>
            </div>
            <div className='logOut p-2' onClick={() => { localStorage.removeItem('token'); props.history.push('AdminLogin') }}>
                <div className='me-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                        <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                    </svg>
                </div>
                <div>
                    Çıkış Yap
                </div>
            </div>
            {showEditPopUp ? <EditPopUp selectedProduct={selectedProduct} setShowEditPopUp={setShowEditPopUp} subCategorys={subCategorys}></EditPopUp> : ''}
            {showDeletePopUp ? <DeletePopUp selectedProduct={selectedProduct} setShowDeletePopUp={setShowDeletePopUp}></DeletePopUp> : ''}
        </>
    )
}

export default AdminPanelContent