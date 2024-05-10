import { CountryProvider } from "./components/CountryContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CountryDetail from "./components/CountryDetail";
import CountryList from "./components/CountryList";

function App() {
  return (
    <CountryProvider>
      <Router>
        <Routes>
          <Route path="/country/:countryName" element={<CountryDetail />} />
          <Route path="/" element={<CountryList />} />
        </Routes>
      </Router>
    </CountryProvider>
  );
}

export default App;
