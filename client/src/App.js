
import './App.css';
import { ShowHero } from './Components/ShowHeroe/ShowHero';
import { ShowHeroes } from './Components/ShowHeroes/ShowHeroes.jsx';


function App() {
  // useEffect(() => {
  //   axios('http://localhost:5000/api/superheroes')
  //   .then(res => console.log(res.data))
  // }, [])
  return (
    <div className="App">
    <ShowHeroes />
    <ShowHero />
    </div>
  );
}

export default App;
