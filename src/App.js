import './App.css';
import Menu from './Components/Menu/Menu';
import { MealsDataContext } from './Components/Context';

function App() {
  return (
    <div className="App">
      <MealsDataContext>
        <Menu />
      </MealsDataContext>
    </div>
  )
}

export default App;
