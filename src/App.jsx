import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { fetchData } from "./helpers/fetchData";
import Homepage from "./pages/Homepage";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";

// global context for categories 
export const CategoryContext = React.createContext([]);

function App() {

  /*API call for categories */
  const [categoryItems, setCategoryItems] = useState([]);
  useEffect(() => {
    const getCategories = () => {
      fetchData("/categories").then((response) => {
        if (response.ok) {
          setCategoryItems(response.data.categories);
        } else {
          console.log(response.error);
        }
      });
    };
    getCategories();
  }, []);

  return (
    <CategoryContext.Provider value={categoryItems}>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/category' component={CategoryPage} />
          <Route path='/product' component={ProductPage} />
        </Switch>
      </BrowserRouter>
    </CategoryContext.Provider>
  );
}

export default App;
