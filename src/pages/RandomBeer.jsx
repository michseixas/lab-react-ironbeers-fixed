import axios from "axios";
import { useEffect, useState } from "react";
import BeerDetailCard from "../components/BeerDetailCard";

function RandomBeer() {
  const [beer, setBeer] = useState({});
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then(({ data }) => {
        setBeer(data);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Beer details</h1>

      {loading && (
        <div>
          Loading...
          <div className="spinner-border" role="status"></div>
          <img src="/images/beers-cheers.png" alt="HomePage" height="80" />
        </div>
      )}

      {!loading && <BeerDetailCard beer={beer} />}
    </>
  );
}

export default RandomBeer;
