import {Link} from 'react-router-dom';
export function PageLink (props) {
  const {to, name} = props;
  return (
    <Link to={to}>
      {name}
    </Link>
  )
}