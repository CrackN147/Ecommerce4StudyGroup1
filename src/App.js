import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Header, Footer} from './pages';
import {routesMap} from './services';
import {LanguageContextProvider} from 'services/contexts/LanguageContext';
import {FavoritesContextProvider} from 'services/contexts/FavoritesContext';
export default function App() {
  return (
    <BrowserRouter>
      <LanguageContextProvider>
        <FavoritesContextProvider>
        <Header />
        <Routes>
          {routesMap.map((route, index) => (
            <Route key={`route-list-${index}`} 
              path={route.path} 
              element={route.element}
            />
          ))}
        </Routes>
        {/* <Footer /> */}
        </FavoritesContextProvider>
      </LanguageContextProvider>
    </BrowserRouter>
  )
}
