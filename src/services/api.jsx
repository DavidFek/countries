import axios from "axios";

export function getCountries() {
  return axios
    .get("https://restcountries.com/v3.1/all")
    .then((response) => response.data);
}
