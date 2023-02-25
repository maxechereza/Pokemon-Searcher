"use client";
import { useContext, useState, createContext } from "react";

//not recomended to have default value for createContext
let CountriesContext = createContext();

export const CountriesProvider = (props) => {
  const [country, setCountry] = useState(null);
  const value = [country, setCountry];
  return <CountriesContext.Provider {...props} value={value} />;
};

export const useCountries = () => {
  const context = useContext(CountriesContext);
  if (!context) {
    throw new Error(`useCountries must be used within the CountriesProvider`);
  }

  return context;
};
