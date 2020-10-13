import { useState, useEffect } from "react";
import { fetchData } from "../helpers/fetchData";

export const useGetProduct = (query) => {

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = () => {
      const url = "/products" + query;
      fetchData(url).then((response) => {
        if (response.ok) {
          setProducts(response.data.products);
        } else {
          setError(response.error);
        }
      });
    };
    getProducts();
  }, [query]);

  return { products, error };
};
