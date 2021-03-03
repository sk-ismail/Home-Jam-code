import './App.css';
import  Navbar  from "./components/Navbar/Navbar";
import Body from './components/Banner/Banner';
import UpcomingShows from './components/Body/Upcoming Shows/UpcomingShows'
import 'bootstrap/dist/css/bootstrap.min.css';
import Reviews from './components/Body/Reviews/Reviews'

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Body/>
     <UpcomingShows/>
     <Reviews/>
    </div>
  );
}

export default App;
