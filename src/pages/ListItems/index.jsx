import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import './style.css'

function ListItems(props) {
    return (
        <div className="App">
            <div className='container'>
                <Navbar></Navbar>
                -{props.location.state.category}
            </div>
            <Footer></Footer>
        </div>
    )
}

export default ListItems