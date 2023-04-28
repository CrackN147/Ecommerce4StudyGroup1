import { useEffect, useState } from "react"
import { useParams, useLocation, useNavigate } from "react-router-dom"
import { Loader, Categories } from "globalComponents";
import {api} from "services/api"
import { CONFIG } from "services/config";
import { Product, Filters } from "./components"
export function Products () {
  let location = useLocation();
  let navigate = useNavigate();
  const { category } = useParams();
  // 
  const [products, setProducts] = useState([])
  const [limit, setLimit] = useState(1);
  // 
  function changeLimit () {
    let newLimit = limit +1;
    setLimit(newLimit);
    navigate({
      pathname: location.pathname,
      search: `?limit=${newLimit}`
    });
  }
  // 
  useEffect(() => {
    async function fetchData () {
      function processLimit () {
        if (!location.search || !location.search.includes('limit')) {
          return false;
        }
        let newLimit = location.search.replace('?', '').split('&');
        newLimit = newLimit.filter(item => item.includes('limit') || item.includes('sort'));
        let limitIndex = newLimit.findIndex(item => item.includes('limit'));
        if (limitIndex > -1) {
          setLimit(parseInt(newLimit[limitIndex].split('=')[1]));
        }
        return newLimit ? `?${newLimit.join('&')}` : false;
      }
      let newLimit = processLimit();
      let catUrl = ``;
      if(category) {
        catUrl = `/category/${category}`;
      }
      let defLimit = `?limit=${limit}`;
      const apiData = await api._get(`${CONFIG.API_PRODUCTS}${catUrl}${newLimit ? newLimit : defLimit}`);
      if (apiData.status === 200) {
        setProducts(apiData.data);
      }
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, location.search])
  return (
    <div>
      <h1>Products</h1>
      <Filters 
        limit={limit} 
        changeLimit={changeLimit}
      />
      <div className="wrapper">
        <Categories />
        <div id="products">
          {products.length > 0 ?
            products.map((product, index) => (
              <Product product={product} key={index} />
            ))
            : <Loader />
          }
        </div>
      </div>
    </div>
  )
}