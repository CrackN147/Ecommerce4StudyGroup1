import { useState, useEffect, useContext } from 'react';
import { api } from 'services/api';
import { CONFIG } from 'services/config';
import { FavoritesContext } from 'services/contexts/FavoritesContext';
import { Product } from 'pages/products/components';
import { Loader } from 'globalComponents';
export function Favorites() {
  const [data, setData] = useState([])
  const { favorites } = useContext(FavoritesContext);
  useEffect(() => { 
    async function fetchData () {
      const apiData = await api._get(`${CONFIG.API_PRODUCTS}`);
      if (apiData.status === 200) {
        let filterData = apiData.data.filter((item) => favorites.includes(item.id));
        setData(filterData);
      }
    }
    fetchData()
  }, [favorites])
  return (
    <div>
      <h1>Favorites</h1>
      <div className="wrapper">
        <div id="products">
          {data.length > 0 ?
            data.map((product, index) => (
              <Product product={product} key={index} />
            ))
            : <Loader />
          }
        </div>
      </div>
    </div>
  )
}