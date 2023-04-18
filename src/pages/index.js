// import { lazy } from 'react';
import {About} from './about';
import {Contact} from './contact';
import {Home} from './home';

export {Header} from './header';
export {Footer} from './footer';

export const rukaMap = [
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
  }
];