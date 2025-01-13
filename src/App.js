import './App.css';
import Menu from './Components/Menu/Menu';
import { CartToggleContextWrapper, ItemViewContextWrapper, MealIdContextWrapper } from './Contexts/OtherContexts';
import { MealDataContextWrapper } from './Contexts/MealsDataContext';
import { CartContextWrapper } from './Contexts/CartContext';
import { WishlistsContextWrapper } from './Contexts/WishlistsContext';
import { CategoriesContextWrapper } from './Contexts/CategoriesContext'
import { MealIdDetailsContextWrapper } from './Contexts/MealIdDetailsContext';
import { BrowserRouter as Router } from 'react-router-dom'
import { OrderContextWrapper } from './Contexts/OrderContext';
import { AreasContextWrapper } from './Contexts/AreasContext';

function App() {
  return (
    <div className="App">
      <Router future={{
        v7_relativeSplatPath: true,
      }}>

        <MealDataContextWrapper>
          <CategoriesContextWrapper>
            <AreasContextWrapper>
              <ItemViewContextWrapper>
                <MealIdContextWrapper>
                  <MealIdDetailsContextWrapper>
                    <CartToggleContextWrapper>
                      <CartContextWrapper>
                        <WishlistsContextWrapper>
                          <OrderContextWrapper>

                            <Menu />

                          </OrderContextWrapper>
                        </WishlistsContextWrapper>
                      </CartContextWrapper>
                    </CartToggleContextWrapper>
                  </MealIdDetailsContextWrapper>
                </MealIdContextWrapper>
              </ItemViewContextWrapper>
            </AreasContextWrapper>
          </CategoriesContextWrapper>
        </MealDataContextWrapper>

      </Router>
    </div >
  )
}

export default App;
