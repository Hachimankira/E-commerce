import React, { useEffect, useState } from 'react'
import ProductCard from '../../../components/ProductCard'
import { useParams } from 'react-router-dom'

const CategoryProducts = () => {
    const { name } = useParams()
    const [products, setProducts] = useState([])

    useEffect(() => {
      const fetchProducts = async() =>{
        const response = await fetch(`https://fakestoreapi.com/products/category/electronics`)
        const data= await response.json()
        console.log(data)
        setProducts(data)
      }
      fetchProducts()
    }, [])

    if(products.length === 0) return <div>Loading ...</div>

  return (
    <ProductCard products={products} />
  )
}

export default CategoryProducts;