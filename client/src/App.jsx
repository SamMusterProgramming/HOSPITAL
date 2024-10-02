
import './App.css';
import Main from './components/main/main'
import Navheader from './components/navheader/Navheader'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/home/Home';
import Booking from './pages/booking/Booking';

function App() {
  return ( 
   <div>
     <Navheader/>
     {/* <Home/> */}
     <Booking/>
   </div>
  );
}

export default App;
