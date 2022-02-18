import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/Home";
import ListBeers from "./components/ListBeers";
import NewBeer from "./components/NewBeer";
import RandomBeer from "./components/RandomBeer";
import Navbar from "./components/Navbar";
import Beer from "./components/Beer";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<ListBeers />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/beers/:beerId" element={<Beer />} />
      </Routes>
    </div>
  );
}

export default App;
