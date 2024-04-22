import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetailPage = () => {
  //const params = useParams();
  const { id } = useParams();
  return (
    <div>ProductDetailPage id: {id}</div>
  )
}

export default ProductDetailPage