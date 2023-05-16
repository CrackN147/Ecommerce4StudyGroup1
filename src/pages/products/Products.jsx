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
  const [limit, setLimit] = useState(3);
  const [sort, setSort] = useState('asc');
  // 

  function changeLimit () {
    let newLimit = limit +1;
    setLimit(newLimit);
    navigate({
      pathname: location.pathname,
      search: `?limit=${newLimit}&sort=${sort}`
    });
  }

  function changeSort () {
    let newSort = (sort === 'asc') ? 'desc' : 'asc';
    setSort(newSort);
    navigate({
      pathname: location.pathname,
      search: `?limit=${limit}&sort=${newSort}`
    });
  }
  // 
  useEffect(() => {
    function getQuery () {
      let localLimit = limit;
      let localSort = sort;
      // ?limit=sdffsdfsdf&sort=desc&jahsgd=%20ajhsdhad&sdfsdf=%20ashbdabsd
      let query = location.search.replace('?', '');
      // limit=sdffsdfsdf&sort=desc&jahsgd=%20ajhsdhad&sdfsdf=%20ashbdabsd
      query = query.split('&');
      // ["limit=sdffsdfsdf", "sort=desc", "jahsgd=%20ajhsdhad", "sdfsdf=%20ashbdabsd"]
      query = query.filter((item) => item.includes('limit') || item.includes('sort'));
      // ["limit=sdffsdfsdf", "sort=desc"]
      let limitIndex = query.findIndex((item) => item.includes('limit'));
      // 0
      let sortIndex = query.findIndex((item) => item.includes('sort'));
      // 1
      if (limitIndex > -1) {
        // limit=sdffsdfsdf
        let limitArr = query[limitIndex].split('=');
        // ["limit", "sdffsdfsdf"]
        let limitInt = parseInt(limitArr[1]);
        if (limitInt){
          setLimit(limitInt);
          localLimit = limitInt;
        }
        // console.log(query[limitIndex]);
      }
      if (sortIndex > -1) {
        // sort=desc 
        let sortArr = query[sortIndex].split('=');
        // ["sort", "desc"]
        if (sortArr[1] === 'asc' || sortArr[1] === 'desc') {
          setSort(sortArr[1]);
          localSort = sortArr[1];
        }
      }
      return `?limit=${localLimit}&sort=${localSort}`
    }

    async function fetchData () {
      let filteredQuery = getQuery();
      let catUrl = ``;
      if(category) {
        catUrl = `/category/${category}`;
      }
      const apiData = await api._get(`${CONFIG.API_PRODUCTS}${catUrl}${filteredQuery}`);
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
        sort= {sort}
        changeLimit={changeLimit}
        changeSort={changeSort}
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