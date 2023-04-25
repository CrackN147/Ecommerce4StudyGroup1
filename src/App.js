import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Header, Footer} from './pages';
import {routesMap} from './services';
import {LanguageContextProvider} from 'services/contexts/LanguageContext';
export default function App() {
  return (
    <BrowserRouter>
      <LanguageContextProvider>
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
      </LanguageContextProvider>
    </BrowserRouter>
  )
}
