import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Loader } from "globalComponents";
import {api} from "services/api"
export function Products () {
  const [products, setProducts] = useState([])
  useEffect(() => {
    async function fetchData () {
      const apiData = await api._get('https://fakestoreapi.com/products');
      if (apiData.status === 200) {
        setProducts(apiData.data);
      }
    }
    fetchData()
  }, [])
  return (
    <div>
      <h1>Products</h1>
      <div id="products">
        {products.length > 0 ?
          products.map((product, index) => (
            <div key={index}>
              <img src={product.image} alt={product.title} />
              <h2>{product.title}</h2>
              {/* <p>{product.description}</p> */}
              <p>{product.price}</p>
              <Link to={`/products/${product.id}`}>View Details</Link>
            </div>
          ))
          : <Loader />
        }
      </div>
    </div>
  )
}