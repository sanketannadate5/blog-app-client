import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home.js';
import Login from './pages/Login';
import Signup from "./pages/Signup";
import About from './pages/About';
import Services from './pages/Services';

function App() {
  return (
   <BrowserRouter>
   <Routes>
      <Route path="/About" element={<About/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path='/services' element={<Services/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
