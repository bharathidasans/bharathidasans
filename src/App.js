import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./Components/Navbar";
import Weather from "./Components/Weather";
import Pagenotfound from "./Components/Pagenotfound";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App col-3 d-flex align-items-center">
      <Navbar />
      <br />
      <br />
      <br />
      <div className="container">
        <Routes>
          <Route path="/*" element={<Pagenotfound />} />
          {["/", "home"].map((path, index) => (
            <Route
              path={path}
              key={index}
              element={<Home />}
              errorElement={<Pagenotfound />}
            />
          ))}
          <Route path="weather" element={<Weather />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
