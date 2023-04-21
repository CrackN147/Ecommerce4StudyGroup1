import { PageLink } from '../../globalComponents';
export function Footer() {
  const links = [
    {to: '/', name: 'Home'},
    {to: '/about', name: 'About'},
    {to: '/contact', name: 'Contact'}
  ];
  return (
    <footer>
      <nav>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <PageLink to={link.to} name={link.name} />
            </li>
          ))}
        </ul>
      </nav>
      <p>© 2021 Company, Inc.</p>
    </footer>
  );
}