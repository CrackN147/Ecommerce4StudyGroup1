import {Link} from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export function PageLink (props) {
  const {to, name, icon} = props;
  return (
    <Link to={to}>
      {
        icon === 'favorites' ? 
          <FavoriteIcon /> : 
        icon === 'cart' ? 
          <ShoppingCartIcon /> :
        name
      }
    </Link>
  )
}