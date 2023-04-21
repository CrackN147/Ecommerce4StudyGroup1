import { PageLink } from '../../../globalComponents';
export function Nav () {
  const links = [
    {to: '/', name: 'Home'},
    {to: '/about', name: 'About'},
    {to: '/contact', name: 'Contact'},
    {to: '/products', name: 'Products'}
  ];
  return (
    <nav>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <PageLink to={link.to} name={link.name} />
          </li>
        ))}
      </ul>
    </nav>
  )
}