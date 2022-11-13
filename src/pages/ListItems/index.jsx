import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import FilterMenu from './FilterMenu'
import ListedItems from './ListedItems'
import './style.css'

function ListItems(props) {
    const apiUrl = "http://localhost:8586/"
    const [products, setProducts] = useState([])
    const [subCategorys, setSubCategorys] = useState([])
    useEffect(() => {
        getProudcts()
        getSubCategories()
    }, [])

    const getProudcts = () => {
        if (products.length === 0) {
            axios.get(apiUrl + 'api/Product')
                .then(function (response) {
                    setProducts(response.data)
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
    const getSubCategories = () => {
        if (subCategorys.length === 0) {
            axios.get(apiUrl + 'api/SubCategories')
                .then(function (response) {
                    setSubCategorys(response.data)
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
    return (
        <div className="App">
            <div className='container'>
                <Navbar></Navbar>
                <div className='row mt-2'>
                    <FilterMenu></FilterMenu>
                    <ListedItems products={products} subCategorys={subCategorys} categoryId={props.location.state.category}></ListedItems>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default ListItems