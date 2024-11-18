import './App.css';
import Menu from './Components/Menu/Menu';
import { CategoriesContextWrapper, DefCategoryContextWrapper, ItemViewContextWrapper, MealIdContextWrapper, MealIdDetailsContextWrapper } from './Contexts/OtherContexts';
// import { CategoriesContextWrapper, DefCategoryContextWrapper, ItemViewContextWrapper, MealIdContextWrapper, MealIdDetailsContextWrapper } from './Contexts/Contexts';
import { MealDataContextWrapper } from './Contexts/MealsDataContext';

function App() {
  return (
    <div className="App">

      <DefCategoryContextWrapper>
        <CategoriesContextWrapper>
          <MealDataContextWrapper> {/*  New */}
            <ItemViewContextWrapper>
              <MealIdContextWrapper>
                <MealIdDetailsContextWrapper>

                  <Menu />

                </MealIdDetailsContextWrapper>
              </MealIdContextWrapper>
            </ItemViewContextWrapper>
          </MealDataContextWrapper> {/*  New */}
        </CategoriesContextWrapper>
      </DefCategoryContextWrapper>

    </div >
  )
}

export default App;
