import './App.css';
import Menu from './Components/Menu/Menu';
import { CartToggleContextWrapper, ItemViewContextWrapper, MealIdContextWrapper } from './Contexts/OtherContexts';
import { MealDataContextWrapper } from './Contexts/MealsDataContext';
import { CartContextWrapper } from './Contexts/CartContext';
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
                  <CartContextWrapper>
                    <CartToggleContextWrapper>

                      <Menu />

                    </CartToggleContextWrapper>
                  </CartContextWrapper>
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
