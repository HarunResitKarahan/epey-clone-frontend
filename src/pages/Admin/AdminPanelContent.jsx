import React from 'react'
import AdminPanelNavbar from './Components/AdminPanelNavbar'
// import Navbar from '../../components/Navbar'

function AdminPanelContent(props) {
    let parse = require('html-react-parser')
    const generalCard = [
        {
            title: "Ürün Sayısı",
            count: 105,
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-archive" viewBox="0 0 16 16">
                    <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                </svg>`
        },
        {
            title: "Üye Sayısı",
            count: 30,
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-person-video" viewBox="0 0 16 16">
                    <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                    <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2Zm10.798 11c-.453-1.27-1.76-3-4.798-3-3.037 0-4.345 1.73-4.798 3H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1.202Z"/>
                </svg>`
        },
        {
            title: "Kategori Sayısı",
            count: 5,
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
                <h3 className='my-4 text-secondary'>Panel Genel Görünüm</h3>
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
                <form className='addProduct p-3' onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <input type="text" className="form-control" placeholder="Ürün İsmi" aria-label="ProductName" aria-describedby="basic-addon1" required />
                    </div>
                    <div>
                        <input type="number" className="form-control" placeholder="Ürün Fiyatı" aria-label="ProductPrice" aria-describedby="basic-addon1" required />
                    </div>
                    <div>
                        <select className="form-select" aria-label="Default select example" required>
                            <option selected>Kategori Seç</option>
                            {/* <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option> */}
                        </select>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-success">Ürün Ekle <strong>+</strong></button>
                    </div>
                </form>
                <div className='addProduct flex-column mt-2 p-3'>
                    <div className='productSearch w-100 my-2 mb-4'>
                        <input type="text" className="form-control py-2" placeholder="Arama Yapın..." aria-label="ProductSearch" aria-describedby="basic-addon1" />
                    </div>
                    <table className="table border rounded">
                        <thead className='table-light'>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Ürün Adı</th>
                                <th scope="col">Fiyat</th>
                                <th scope="col">Kategori</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td colspan="2">Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <div className='logOut p-2' onClick={() => { localStorage.removeItem('token'); props.history.push('AdminLogin') }}>
                        <div className='me-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                                <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                            </svg>
                        </div>
                        <div>
                            Çıkış Yap
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminPanelContent