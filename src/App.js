import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {rukaMap, Header, Footer} from './pages';
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {rukaMap.map((route, index) => (
          <Route key={`route-list-${index}`} path={route.path} element={route.element}/>
        ))}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
