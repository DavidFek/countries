import React, { createContext, useState, useEffect } from "react";
import { getCountries } from "../services/api";

export const CountryContext = createContext();

export function CountryProvider({ children }) {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCountries().then(setCountries).catch(setError);
  }, []);

  return (
    <CountryContext.Provider value={{ countries, error }}>
      {children}
    </CountryContext.Provider>
  );
}
