import './App.css';
import Home from './pages/Home';
import  {Route, Routes} from 'react-router-dom';
import Booking from './pages/Booking';
function App() {
  return (
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/booking" element={ <Booking/>} />
      </Routes>
  );
}

export default App;
