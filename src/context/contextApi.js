import { createContext, useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

export const Context = createContext();

export const AppContext = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);
  useEffect(() => {
    fetchSelectedCategories(selectedCategories);
  }, [selectedCategories]);

  const fetchSelectedCategories = (query) => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${query}`).then((res) => {
      // console.log(res.contents)
      setSearchResults(res.contents);
      setLoading(false);
    });
  };
  const value = {
    loading,
    setLoading,
    searchResults,
    setSearchResults,
    selectedCategories,
    setSelectedCategories,
    mobileMenu,
    setMobileMenu,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
