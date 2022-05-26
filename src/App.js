// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';



function App() {

  return (
    <div className="App">
      <header className="App-header">
        <NavBar boton1={'comprar'} boton2={'mi carrito'} boton3={'historial'} boton4={'categorias'} />
        <h1 style={{ color: 'yellow' }} onClick={() => console.log('hice click')}>MERCADO LIBRE</h1>
        <ItemListContainer greeting='BIENVENIDO USUARIO' />
      </header>
    </div>
  );
}

export default App;
