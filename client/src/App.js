
import './App.css';
import Login from './Components/Login/Login.jsx';
import { ShowHero } from './Components/ShowHeroe/ShowHero';
import { ShowHeroes } from './Components/ShowHeroes/ShowHeroes.jsx';
import { Route, Routes } from 'react-router-dom'
import Usuarios from './Components/Usuarios/Usuarios.jsx';
import Navbar from './Components/Navbar/Navbar';
import Salvados from './Components/Slavados/Salvados';




function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/auths' element={<Usuarios />} />
        <Route path='/superheroes' element={<ShowHeroes />} />
        <Route path='/superheroes/:id' element={<ShowHero />} />
        <Route path='/salvados' element={<Salvados />} />
      </Routes>
    </div>
  );
}

export default App;
