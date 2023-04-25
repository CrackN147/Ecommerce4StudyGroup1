import { PageLink } from '../../../globalComponents';
export function Nav({langs, language}) {
  const links = [
    { to: '/', name: langs[language].home.title },
    { to: '/about', name: langs[language].about.title },
    { to: '/contact', name: langs[language].contact.title },
    { to: '/products', name: langs[language].products.title }
  ];
  return (
    <div className='navigation'>
      {links.map((link, index) => (
        <PageLink to={link.to} name={link.name} key={index} />
      ))}
    </div>
  )
}