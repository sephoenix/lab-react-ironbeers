import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function Beer() {
  const { beerId } = useParams();
  const [beer, setBeer] = useState([]);

  console.log(beerId);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        setBeer(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [beerId]);

  /*  const beer = response.data.find((beer) => {
    return beer._id === beerId;
  }); */

  return (
    <div>
      {
        <div>
          <h1>{beer.name}</h1>
          <img src={beer.image_url} alt="beer" />
          <h2>{beer.tagline}</h2>
          <h2>{beer.first_brewed}</h2>
          <h2>{beer.attenuation_level}</h2>
          <h2>{beer.description}</h2>
          <h2>{beer.contributed_by}</h2>
        </div>
      }
    </div>
  );
}

export default Beer;
