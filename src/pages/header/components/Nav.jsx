import { PageLink } from '../../../globalComponents';
export function Nav({langs, language}) {
  const links = [
    { to: '/', name: langs[language].home.title },
    { to: '/about', name: langs[language].about.title },
    { to: '/contact', name: langs[language].contact.title },
    { to: '/products', name: langs[language].products.title },
    { to: '/product-add', name: langs[language].productAdd.title},
    { to: '/favorites', name: '', icon: 'favorites'},
    { to: '/cart', name: '', icon: 'cart'},
  ];
  return (
    <div className='navigation'>
      {links.map((link, index) => (
        <PageLink 
          to={link.to} 
          name={link.name} 
          icon={link.icon}
          key={index} 
        />
      ))}
    </div>
  )
}