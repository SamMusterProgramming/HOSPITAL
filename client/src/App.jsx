
import './App.css';
import Main from './components/main/main'
import Navheader from './components/navheader/Navheader'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/home/Home';

function App() {
  return ( 
   <div>
     <Navheader/>
     <Home/>
   </div>
  );
}

export default App;
