import { useState, useContext } from "react";
import Country from "./Country";
import { CountryContext } from "./CountryContext";
import { Link } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";

function CountryList() {
  const { countries, error } = useContext(CountryContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const { toggleTheme } = useContext(ThemeContext);

  const filteredCountries = countries.filter(
    (country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedRegion ? country.region === selectedRegion : true)
  );

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="main-wrapper">
      <h1>Where in the world?</h1>
      <div className="config-wrapper">
        <input
          className="search-bar"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="region-select"
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
        >
          <option value="">All Regions</option>
          <option value="Africa">Africa</option>{" "}
          <option value="Americas">Americas</option>{" "}
          <option value="Asia">Asia</option>{" "}
          <option value="Europe">Europe</option>{" "}
          <option value="Oceania">Oceania</option>
        </select>
        <button onClick={toggleTheme} className="button-theme">
          Toggle Theme
        </button>
      </div>
      <div className="country-list">
        {filteredCountries.map((country, index) => (
          <Link
            key={index}
            className="country-list__link"
            to={`/country/${country.name.common}`}
          >
            <Country country={country} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CountryList;
