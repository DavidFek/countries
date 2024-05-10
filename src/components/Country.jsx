function Country({ country }) {
  return (
    <div className="country-item">
      <img
        src={country.flags.png}
        alt={country.name.common}
        className="country-item__image"
      ></img>
      <h2 className="country-item__detail country-item__name">
        {country.name.common}
      </h2>
      <p className="country-item__detail country-item__pop">
        Population: {country.population.toLocaleString()}
      </p>
      <p className="country-item__detail country-item__region">
        Region: {country.region}
      </p>
      <p className="country-item__detail country-item__cap">
        Capital: {country.capital}
      </p>
    </div>
  );
}

export default Country;
