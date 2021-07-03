import './App.css';
import NavBar from './Components/Navbar.js';
import Footer from './Components/Footer';
import {BrowserRouter, Route} from "react-router-dom";
import Home from './Routes/Home';
import Filtro from './Components/Filtro';
import ProductSug from './Components/ProductSug';



function App() {
  return (
    <BrowserRouter>
    <Route exact path="/" component={Home}/>
    <Route  path="/" component={NavBar}/>
    <Route exact path="/search" component={Filtro}/>  
    <Route exact path="/" component={ProductSug}/>
    <Route  path="/" component={Footer}/>
    </BrowserRouter>
  );
}

export default App;
