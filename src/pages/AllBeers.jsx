import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BeerCard from '../components/BeerCard';
import FilterForm from '../components/FilterForm';

function AllBeers (){
    const [beers, setBeers] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [filteredBeers, setFilteredBeers] = useState([]);

    useEffect(()=>{
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then(({data})=>{
            console.log("que trae este console log??? ---->> ", data);
            //setBeers brings all the beers to the array beers
            setBeers(data); 
            //setFilteredBeers brings all the beers to the array filteredBeers that is later used to filter the beers
            //this helps to show all the beers when there are no filters applied.
            setFilteredBeers(data);
            setTimeout(()=>{
                setLoading(false);
            }, 500);
        })
        .catch(err => console.log(err));
    }, [])

    const filterBeers = (text) => 
    { setFilteredBeers(beers.filter(beer => beer.name.toLowerCase().includes(text.toLowerCase()))) 
    }


    return (
      <>
      <FilterForm filterFunction={filterBeers} />
        <h1>All Beers</h1>

        {loading && (
          <div>
            Loading...
            <div className="spinner-border" role="status"></div>
            <img src="/images/beers-cheers.png" alt="HomePage" height="80" />
          </div>
        )}

{/* // while you don't filter anything, filteredBeers equals the complete array of beers unfiltered. */}
        {filteredBeers.map((beer) => {
          return (
            <BeerCard
              id={beer._id}
              image={beer.image_url}
              name={beer.name}
              tagline={beer.tagline}
              contributed_by={beer.contributed_by}
            />
          );
        })}
      </>
    );
}

export default AllBeers;