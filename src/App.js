import './App.css';
import Menu from './Components/Menu/Menu';
import { CartToggleContextWrapper, ItemViewContextWrapper, MealIdContextWrapper, PopUpContextWrapper } from './Contexts/OtherContexts';
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
        v7_startTransition: true,
      }}>

        <MealDataContextWrapper>
          <CategoriesContextWrapper>
            <AreasContextWrapper>
              <PopUpContextWrapper>
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
              </PopUpContextWrapper>
            </AreasContextWrapper>
          </CategoriesContextWrapper>
        </MealDataContextWrapper>

      </Router>
    </div >
  )
}

export default App;
