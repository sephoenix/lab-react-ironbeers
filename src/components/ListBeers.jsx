import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ListBeers() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        setBeers(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      <h1>ListBeers</h1>
      {beers.map((beer) => {
        return (
          <div>
            <Link to={`/beers/${beer._id}`}>
              <img src={beer.image_url} alt="beer" />
              <h2>{beer.name}</h2>
              <h3>{beer.tagline}</h3>
              <h4>{beer.contributed_by}</h4>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
export default ListBeers;
