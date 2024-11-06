import './App.css';
import Menu from './Components/Menu/Menu';
import { CategoriesContextWrapper, DefCategoryContextWrapper, MealsContextWrapper } from './Components/Context';

function App() {
  return (
    <div className="App">

      <DefCategoryContextWrapper>
        <CategoriesContextWrapper>
          <MealsContextWrapper>

            <Menu />

          </MealsContextWrapper>
        </CategoriesContextWrapper>
      </DefCategoryContextWrapper>

    </div >
  )
}

export default App;
