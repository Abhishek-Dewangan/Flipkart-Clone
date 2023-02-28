import React from 'react'
import styles from './ProductDetailsPage.module.css'
import { useParams } from 'react-router-dom'

const ProductDetailsPage = () => {
    const {productid} = useParams();
  return (
    <div>ProductDetailsPage</div>
  )
}

export default ProductDetailsPage