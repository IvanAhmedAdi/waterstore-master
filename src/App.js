import React from 'react'
import { Routes, Route, } from "react-router-dom";
import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListConteiner/ItemListConteiner';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  return (

    <>
    
    <div className="App">
      
      <NavBar />
      <section>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Lista de Catalogo" />}></Route>
          <Route path='/categoria/:categoriaId' element={<ItemListContainer greeting="Productos filtrados"/>}></Route>
          <Route path='/item/:id' element={<ItemDetailContainer />} />
        </Routes>
      </section>
      <ItemCount stock={10} />
    </div>
    
    </>
   
  );
}


export default App;

