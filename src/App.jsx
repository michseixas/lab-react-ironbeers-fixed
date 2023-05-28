//Here we import all the pages and define the routes (imports on top, routes inside tags)
import { Routes, Route} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import AllBeers from "./pages/AllBeers";
import NewBeer from "./pages/NewBeer";
import RandomBeer from "./pages/RandomBeer";
import BeerDetail from './pages/BeerDetail';
import ErrorPage from './pages/ErrorPage';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<AllBeers />}/>
        <Route path="/random-beer" element={<RandomBeer />}/>
        <Route path="/new-beer" element={<NewBeer />}/>
        <Route path="/beers/:beerId" element={<BeerDetail />}/> 
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
