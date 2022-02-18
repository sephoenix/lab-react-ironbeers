import axios from "axios";
import { useEffect, useState } from "react";

function RandomBeer() {
  const [random, setRandom] = useState([]);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((response) => {
        setRandom(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      {
        <div>
          <h1>{random.name}</h1>
          <img src={random.image_url} alt="randombeer" />
          <h2>{random.tagline}</h2>
          <h2>{random.first_brewed}</h2>
          <h2>{random.attenuation_level}</h2>
          <h2>{random.description}</h2>
          <h2>{random.contributed_by}</h2>
        </div>
      }
    </div>
  );
}
export default RandomBeer;
