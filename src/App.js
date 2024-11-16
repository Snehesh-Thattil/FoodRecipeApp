import './App.css';
import Menu from './Components/Menu/Menu';
import { CategoriesContextWrapper, DefCategoryContextWrapper, ItemViewContextWrapper, MealsContextWrapper } from './Components/Contexts';

function App() {
  return (
    <div className="App">

      <DefCategoryContextWrapper>
        <CategoriesContextWrapper>
          <MealsContextWrapper>
            <ItemViewContextWrapper>

              <Menu />

            </ItemViewContextWrapper>
          </MealsContextWrapper>
        </CategoriesContextWrapper>
      </DefCategoryContextWrapper>

    </div >
  )
}

export default App;
