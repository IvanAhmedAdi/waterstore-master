import React from 'react'
import './ItemListConteiner.css'
import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'

const ItemListConteiner = ({ greeting }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        })
    }, [])
   
    

    return(
        <div className='ItemListConteiner'>
            <h1>{ greeting }</h1>
            {/* { products.map(product => <p key={product.id}>{product.name}</p>) } */}
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListConteiner