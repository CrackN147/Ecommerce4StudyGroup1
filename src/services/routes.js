import {About, Contact, Home, Products, ProductsDetails, ProductAdd, ProductEdit} from '../pages';
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
  },
  {
    path: 'product-add',
    element: <ProductAdd />,
  },
  {
    path: 'product-edit/:prID',
    element: <ProductEdit />,
  },
];