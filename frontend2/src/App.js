import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar';
import Footer from './Components/Footer';
import {BrowserRouter, Route} from "react-router-dom";
import Home from './Routes/Home';
import Autor from './Components/Autor';
import Filtro from './Components/Filtro';
import ProductSug from './Components/ProductSug';



function App() {
  return (
    <BrowserRouter>
    <Route exact path="/" component={Home}/>
    <Route  path="/" component={NavBar}/>
    <Route exact path="/search" component={Filtro}/>
    <Route exact path="/autor" component={Autor}/>
    <Route exact path="/" component={ProductSug}/>
    <Route  path="/" component={Footer}/>
    </BrowserRouter>
  );
}

export default App;
