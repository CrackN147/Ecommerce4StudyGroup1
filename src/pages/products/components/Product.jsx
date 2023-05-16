import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { storage } from 'services/storage'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { FavoritesContext } from 'services/contexts/FavoritesContext';
export function Product (props) {
  const { product } = props;
  const { favorites, isFavorite, toggleFavorite } = useContext(FavoritesContext);
  return (
    <div >
      <img src={product.image} alt={product.title} />
      <div>
        <FavoriteIcon 
          sx={{ color: isFavorite(product.id) ? "#27009c" : "#b1b1b1" }}
          onClick={() => toggleFavorite(product.id)}
        />
        <ShoppingCartIcon sx={{ color: "#b1b1b1" }} />
      </div>
      <h2>{product.title}</h2>
      {/* <p>{product.description}</p> */}
      <p>{product.price}</p>
      <Link to={`/product-details/${product.id}`}>View Details</Link>
      <p></p>
      <Link to={`/product-edit/${product.id}`}>Edit</Link>
    </div>
  )
}