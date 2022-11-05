import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import './style.css'

function ListItems(category) {
    return (
        <div className="App">
            <div className='container'>
                <Navbar></Navbar>
                {category}
            </div>
            <Footer></Footer>
        </div>
    )
}

export default ListItems