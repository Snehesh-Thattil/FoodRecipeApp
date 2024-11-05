import './App.css';
import Menu from './Components/Menu/Menu';
import { CategoriesContextWrapper, MealsContextWrapper } from './Components/Context';

function App() {
  return (
    <div className="App">

      <MealsContextWrapper>
        <CategoriesContextWrapper>

          <Menu />

        </CategoriesContextWrapper>
      </MealsContextWrapper>

    </div>
  )
}

export default App;
