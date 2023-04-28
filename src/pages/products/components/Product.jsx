import { Link } from 'react-router-dom'
export function Product (props) {
  const { product } = props
  return (
    <div >
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      {/* <p>{product.description}</p> */}
      <p>{product.price}</p>
      <Link to={`/product-details/${product.id}`}>View Details</Link>
    </div>
  )
}