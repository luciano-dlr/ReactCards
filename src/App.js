// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';

import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';




function App() {

  return (
    <div className="App">
      <header className="App-header">
        <NavBar boton1={'comprar'} boton2={'mi carrito'} boton3={'historial'} boton4={'categorias'} />
        <h1 style={{ color: 'yellow' }} onClick={() => console.log('hice click')}>MERCADO LIBRE</h1>

        <ItemDetailContainer />



      </header>
    </div>
  );
}

export default App;
