import React from 'react'
import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListConteiner/ItemListConteiner';
import ItemCount from './components/ItemCount/ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  return (
    <div className="App">
      <NavBar />
      <section>
        <ItemListContainer greeting="Lista de Catalogo" />
      </section>
      <ItemCount stock={10} />
    </div>

  );
}


export default App;
