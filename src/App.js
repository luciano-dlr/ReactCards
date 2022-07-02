import React from 'react';
import Navbar from './components/NavBar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContextProvider from './components/Context/CartContext';

const App = () => {


  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Todos los productos" />}></Route>
          <Route path='/category/:idcategory' element={<ItemListContainer greeting="Productos por categoria" />} />
          <Route path='/item/:idItem' element={<ItemDetailContainer />}></Route>
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}
export default App;
