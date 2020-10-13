import { useEffect, useState } from "react";

export const useProductLocalStore = (key, product) => {

  const [dataStore, setDataStore] = useState([]);

  useEffect(() => {
    const newDataStore = JSON.parse(localStorage.getItem(key)) || [];
    const isExisting = newDataStore.find(({ sku }) => sku === product.sku);

    if (isExisting === undefined) {
      newDataStore.unshift(product);
      localStorage.setItem(key, JSON.stringify(newDataStore));
    }
    setDataStore(newDataStore);
  }, [key, product]);

  return { dataStore };
}
