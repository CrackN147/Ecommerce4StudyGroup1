import './css/App.css';

function ButtonComponent(props) {
  const {name, cutomClassName} = props;
  return (
    <button className={cutomClassName}>{name}</button>
  )
}


function App() {
  return (
    <div className='wrapper'>
      <ButtonComponent name='John' cutomClassName='red'/>
      <ButtonComponent name='Giorgi' cutomClassName='blue'/>
    </div>
  )
}

export default App;
