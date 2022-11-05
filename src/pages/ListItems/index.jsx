import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import FilterMenu from './FilterMenu'
import ListedItems from './ListedItems'
import './style.css'

function ListItems(props) {
    return (
        <div className="App">
            <div className='container'>
                <Navbar></Navbar>
                <div className='row mt-2'>
                    <FilterMenu></FilterMenu>
                    <ListedItems></ListedItems>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default ListItems