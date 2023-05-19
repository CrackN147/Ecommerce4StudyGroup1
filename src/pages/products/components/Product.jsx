import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { FavoritesContext } from 'services/contexts/FavoritesContext';
import { CartContext } from 'services/contexts/CartContext';
export function Product (props) {
  const { product, isCart } = props;
  const { isFavorite, toggleFavorite } = useContext(FavoritesContext);
  const { 
    checkIfProductIsInCart,
    addProductToCart, 
    removeProductFromCart,
    getQuantityOfProductInCart,
    changeQuantityOfProductInCart
  } = useContext(CartContext);
  const [quantity, setQuantity] = useState(getQuantityOfProductInCart(product.id));

  const changeQuantity = (e) => {
    let value = e.target.value;
    if (value < 1 || value === "" || !parseInt(value)  || parseInt(value) > 10) {
      return;
    }
    changeQuantityOfProductInCart(product.id, value);
    setQuantity(value);
  }
  const processProduct = () => {
    if (checkIfProductIsInCart(product.id)) {
      removeProductFromCart(product.id);
    } else {
      addProductToCart(product.id);
    }
  }

  return (
    <div >
      <img src={product.image} alt={product.title} />
      <div>
        <FavoriteIcon 
          sx={{ color: isFavorite(product.id) ? "#27009c" : "#b1b1b1" }}
          onClick={() => toggleFavorite(product.id)}
        />
        <ShoppingCartIcon 
          sx={{ color: checkIfProductIsInCart(product.id) ? "#27009c" : "#b1b1b1" }} 
          onClick={processProduct}
        />
      </div>
      {isCart ? 
        <>
          <label htmlFor="quantity">Quantity</label>
          <input type="number" value={quantity} onChange={changeQuantity}/>
        </>
        : null
      }
      <h2>{product.title}</h2>
      {/* <p>{product.description}</p> */}
      <p>{product.price}</p>
      <Link to={`/product-details/${product.id}`}>View Details</Link>
      <p></p>
      <Link to={`/product-edit/${product.id}`}>Edit</Link>
    </div>
  )
}