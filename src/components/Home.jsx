import { Link } from "react-router-dom";
import beers from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";

function Home() {
  return (
    <div className="home">
      <Link to="/beers">
        All beers
        <img src={beers} alt="beers" />
      </Link>
      <Link to="/random-beer">
        Random Beer
        <img src={newBeer} alt="randombeer" />
      </Link>
      <Link to="/new-beer">
        New Beer
        <img src={randomBeer} alt="newbeer" />
      </Link>
    </div>
  );
}

export default Home;
