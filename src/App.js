import './App.css';
import Menu from './Components/Menu/Menu';
import { ItemViewContextWrapper, MealIdContextWrapper } from './Contexts/OtherContexts';
import { MealDataContextWrapper } from './Contexts/MealsDataContext';
import { DefCategoryContextWrapper } from './Contexts/DefCategoryContext'
import { CategoriesContextWrapper } from './Contexts/CategoriesContext'
import { MealIdDetailsContextWrapper } from './Contexts/MealIdDetailsContext';

function App() {
  return (
    <div className="App">
      <MealDataContextWrapper>
        <DefCategoryContextWrapper>
          <CategoriesContextWrapper>
            <ItemViewContextWrapper>
              <MealIdContextWrapper>
                <MealIdDetailsContextWrapper>

                  <Menu />

                </MealIdDetailsContextWrapper>
              </MealIdContextWrapper>
            </ItemViewContextWrapper>
          </CategoriesContextWrapper>
        </DefCategoryContextWrapper>
      </MealDataContextWrapper>
    </div >
  )
}

export default App;
