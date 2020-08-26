import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import { useGetCategories } from "./hooks/useGetCategories";
import { useGetProduct } from "./hooks/useGetProduct";

// global context for categories
export const CategoryContext = React.createContext([]);
export const ProductsContext = React.createContext({});

function App() {

  const categoryItems = useGetCategories();
  const featuredProducts = useGetProduct("(offers.type=special_offer)");
  const todaysDeals = useGetProduct("(offers.type=digital_insert)");
  const hotDeal = useGetProduct("(offers.type=deal_of_the_day)");

  CategoryContext.displayName = 'Categories';
  ProductsContext.displayName = 'HomepageProducts';

  return (
    <CategoryContext.Provider value={categoryItems}>
      <ProductsContext.Provider value={{featured: featuredProducts,
                                        todaysDeal:todaysDeals,
                                        hottestDeal: hotDeal }}>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/category' component={CategoryPage} />
          <Route path='/product' component={ProductPage} />
        </Switch>
      </BrowserRouter>
      </ProductsContext.Provider>
    </CategoryContext.Provider>
  );
}

export default App;
