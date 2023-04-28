import {useState, useEffect} from "react"
import { useParams, Link } from "react-router-dom"
import {api} from "services/api"
export function ProductsDetails () {
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]); 
  const { prID } = useParams();
  useEffect(() => {
    // async function fetchData () {
    //   fetch(`https://fakestoreapi.com/products/${prID}`)
    //     .then(res=>res.json()).then(json => {
    //       if (json) {
    //         setProduct(json)
    //       }
    //     })
    // }
    async function fetchData () {
      const apiData = await api._get(`https://fakestoreapi.com/products/${prID}`);
      if (apiData.status === 200) {
        setProduct(apiData.data);
      }
    }
    fetchData()
  }, [prID])
  useEffect(() => {
    async function fetchData () {
      const apiData = await api._get(`https://fakestoreapi.com/products?limit=5`);
      if (apiData.status === 200) {
        setRelatedProducts(apiData.data);
      }
    }
    fetchData()
  }, [])

  return (
    <div>
      <h1>Product Details</h1>
      <div id="product">
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>{product.price}</p>
      </div>
      <div id="related-products">
        <h2>Related Products</h2>
        {relatedProducts.length > 0 ?
          relatedProducts.map((product, index) => (
            <div key={index}>
              <img src={product.image} alt={product.title} />
              <p>{product.price}</p>
              <Link to={`/product-details/${product.id}`}>View Details</Link>
            </div>
          ))
          : <p>No related products</p>
        }
        </div>
    </div>
  )
}