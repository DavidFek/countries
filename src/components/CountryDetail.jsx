import { useParams, useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import { CountryContext } from "./CountryContext";

function CountryDetail() {
  const { countryName } = useParams();
  const { countries } = useContext(CountryContext);
  const navigate = useNavigate();

  const country = countries.find(
    (country) => country.name.common === countryName
  );

  if (!country) {
    navigate("/");
    return null;
  }

  return (
    <div className="country-detail__wrapper">
      <Link to="/" className="country-detail__back-button">
        Back
      </Link>

      <h1 className="country-detail__name">{country.name.common}</h1>
      <div className="country-detail__subwrapper">
        <img
          className="country-detail__imgage"
          src={country.flags.svg}
          alt={`Flag of ${country.name}`}
        />

        <div className="country-detail__info-wrapper">
          <p className="country-detail__info country-detail__cap">
            Capital: {country.capital}
          </p>
          <p className="country-detail__info country-detail__region">
            Region: {country.region}
          </p>
          <p className="country-detail__info country-detail__subregion">
            Subregion: {country.subregion}
          </p>
          <p className="country-detail__info country-detail__pop">
            Population: {country.population.toLocaleString()}
          </p>
          <p className="country-detail__info country-detail__area">
            Area: {country.area.toLocaleString()} km²
          </p>
          <p className="country-detail__info country-detail__timezone">
            Timezones: {country.timezones.join(", ")}
          </p>
          <p className="country-detail__info country-detail__curr">
            Currencies:{" "}
            {Object.values(country.currencies)
              .map((currency) => currency.name)
              .join(", ")}
          </p>
          <p className="country-detail__info country-detail__lang">
            Languages: {Object.values(country.languages).join(", ")}
          </p>
          <p className="country-detail__info country-detail__border">
            Borders:{" "}
            {country.borders && country.borders.length > 0
              ? country.borders
                  .map((border, index) => {
                    const borderCountry = countries.find(
                      (c) => c.cca3 === border
                    );
                    if (!borderCountry) {
                      return null;
                    }
                    return (
                      <span key={index}>
                        <Link
                          className="country-detail__border-link"
                          to={`/country/${borderCountry.name.common}`}
                        >
                          {borderCountry.name.common}
                        </Link>
                        {index < country.borders.length - 1 && ", "}
                      </span>
                    );
                  })
                  .filter(Boolean)
              : "No borders"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CountryDetail;
