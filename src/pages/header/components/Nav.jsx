import { PageLink } from 'src/globalComponents';
export function Nav () {
  const links = [
    {to: '/', name: 'Home'},
    {to: '/about', name: 'About'},
    {to: '/contact', name: 'Contact'}
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