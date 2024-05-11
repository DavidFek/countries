import { CountryProvider } from "./components/CountryContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CountryDetail from "./components/CountryDetail";
import CountryList from "./components/CountryList";
import { ThemeProvider } from "./components/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <CountryProvider>
        <Router>
          <Routes>
            <Route path="/country/:countryName" element={<CountryDetail />} />
            <Route path="/" element={<CountryList />} />
          </Routes>
        </Router>
      </CountryProvider>
    </ThemeProvider>
  );
}

export default App;
