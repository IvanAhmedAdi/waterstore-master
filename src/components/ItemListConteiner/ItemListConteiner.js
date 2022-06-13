import React from 'react'
import './ItemListConteiner.css'
import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getProductsByCategory } from '../../asyncmock'


const ItemListConteiner = ({ greeting }) => {
    const [products, setProducts] = useState([])

    
    const { categoriaId } = useParams()

    useEffect (() => {
        if (!categoriaId) {

            getProducts().then(result => setProducts(result));
        } else {
            getProductsByCategory(categoriaId).then(result => {
                setProducts(result)
            })
        }
    }, [categoriaId])

   
    

    return(
        <div className='ItemListConteiner'>
            <h1>{ greeting }</h1>
            {/* { products.map(product => <p key={product.id}>{product.name}</p>) } */}
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListConteiner