import './css/App.css';
import { Header, Footer } from './pages';
function ButtonComponent(props) {
  const {name, cutomClassName} = props;
  return (
    <button className={cutomClassName}>{name}</button>
  )
}


function App() {
  return (
    <>
    <Header />
      <ButtonComponent name='John' cutomClassName='red'/>
      <ButtonComponent name='Giorgi' cutomClassName='blue'/>
      <Footer/>
    </>
  )
}

export default App;
