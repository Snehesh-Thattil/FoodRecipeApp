import './App.css';
import Menu from './Components/Menu/Menu';
import { CategoriesContextWrapper, DefCategoryContextWrapper, ItemViewContextWrapper, MealIdContextWrapper, MealIdDetailsContextWrapper, MealsContextWrapper } from './Components/Contexts';

function App() {
  return (
    <div className="App">

      <DefCategoryContextWrapper>
        <CategoriesContextWrapper>
          <MealsContextWrapper>
            <ItemViewContextWrapper>
              <MealIdContextWrapper>
                <MealIdDetailsContextWrapper>

                  <Menu />

                </MealIdDetailsContextWrapper>
              </MealIdContextWrapper>
            </ItemViewContextWrapper>
          </MealsContextWrapper>
        </CategoriesContextWrapper>
      </DefCategoryContextWrapper>

    </div >
  )
}

export default App;
