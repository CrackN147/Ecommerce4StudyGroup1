import { useState, useEffect, useContext } from 'react';
import { api } from 'services/api';
import { CONFIG } from 'services/config';
import { Loader } from 'globalComponents';
import { Product } from '../products/components';
import { CartContext } from 'services/contexts/CartContext';
export function Cart() {
  const [data, setData] = useState([]);
  const { cart } = useContext(CartContext);
  useEffect(() => {
    if (cart.length === 0) return () => {};
    const fetchData = async () => {
      const apiData = await api._get(CONFIG.API_PRODUCTS);
      if (apiData.status === 200) {
        let filteredData = apiData.data.filter((product) => {
          let index = cart.findIndex((item) => item.productId === product.id);
          if (index > -1) {
            return true;
          } else {
            return false;
          }
        });
        setData(filteredData);
      }
    }
    fetchData();
  }, [cart]);
  return (
    <div>
      <h1>Cart</h1>
      <div id="products">
          {data.length > 0 ?
            data.map((product, index) => (
              <Product product={product} key={index} isCart={true} />
            ))
            : <Loader />
          }
        </div>
    </div>
  )
}