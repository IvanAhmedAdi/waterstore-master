import React from 'react'
import './ItemListConteiner.css'
import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'


const ItemListConteiner = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const {categoriaId} = useParams();

    useEffect(() => {
       
        if (categoriaId) {
            getProducts().then(res => setProducts(res.filter(products => products.category === categoriaId)));
        } else {
            getProducts().then(res => setProducts(res));
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