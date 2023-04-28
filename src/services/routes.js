import {About, Contact, Home, Products, ProductsDetails} from '../pages';
export const routesMap = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'about',
    element: <About />,
  },
  {
    path: 'about/:id',
    element: <About />,
  },
  {
    path: 'contact',
    element: <Contact />,
  },
  {
    path: 'products',
    element: <Products />,
  },
  {
    path: 'products/:category',
    element: <Products />,
  },
  {
    path: 'product-details/:prID',
    element: <ProductsDetails />,
  }
];