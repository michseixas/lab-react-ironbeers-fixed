import HomePageCard from '../components/HomePageCard';


function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
      <HomePageCard link="/beers" image="/images/beers.png" title= "All Beers" description="All the beers of Ironbeers!"/>

      <HomePageCard link="/random-beer" image="/images/random-beer.png" title= "Random Beer" description="Be surprised with one random beer!"/>

      <HomePageCard link="/new-beer" image="/images/new-beer.png" title= "New Beer" description="Add a new amazing beer!"/>
    </div>
  );
}

export default HomePage;
