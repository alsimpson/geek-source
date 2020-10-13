import { useState, useEffect } from "react";
import { fetchData } from "../helpers/fetchData";

/*API call for categories */
export const useGetCategories = () => {

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

  return categoryItems;
};
