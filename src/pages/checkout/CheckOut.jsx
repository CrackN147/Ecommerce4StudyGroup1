import { useState, useEffect, useContext } from "react";
import {api} from 'services/api';
import {CONFIG} from 'services/config';
import { CartContext } from "services/contexts/CartContext";
export function CheckOut() {
  const [data, setData] = useState({
    products: [],
    total: 0,
  });
  const { cart } = useContext(CartContext);
  console.log([], {}, 1, "1", true, false, null, undefined, NaN)
  useEffect(() => {
    const fetchData = async () => {
      const result = await api._get(`${CONFIG.API_PRODUCTS}`);
      if (result.status === 200) {
        let processedData = {...data}
        let products = result.data.filter((product) => {
          let index = cart.findIndex((item) => item.productId === product.id);
          return index !== -1;
        });
        processedData.products = products.map((product) => {
          let productQuantity = cart.find((item) => item.productId === product.id).quantity;
          processedData.total += productQuantity * product.price;

          product.quantity = productQuantity;
          product.sumPrice = product.price * productQuantity;
          return product;
        })
        setData(processedData);
      }
    };
    fetchData();
  }, [cart]);
  return (
    <div>
      <h1>CheckOut</h1>
      {data.products.length > 0 ? 
        data.products.map((product) => {
          return (
            <div key={product.id} style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
              <p>{product.title}</p>
              <p>{product.quantity}</p>
              <p>{product.price}</p>
              <p>{product.sumPrice}</p>
            </div>
          )
        }
      ) : <p>Empty</p>
      }
      <p>Total: {data.total}</p>
    </div>
  )
}