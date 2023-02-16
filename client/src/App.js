import './App.css';
//import logo from './css/img/icono.jpg';
import { Redirect } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Index from './componentes/Index';
import Inicio from './componentes/Inicio';
import CountriesDetalle from './componentes/CiudadesDetalle';
import NavBar from './componentes/NavBar';
import CrearActividad from './componentes/CrearActividad';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Redirect from="/" to="/Bienvenido" />
        <Route exact path="/Bienvenido" component={Index} />
        <Route path='/' render={(props) => <NavBar {...props} />} />
        <Route exact path="/Inicio" component={Inicio} />
        <Route exact path="/Ciudad/:id" component={CountriesDetalle} />
        <Route exact path="/CrearActividad" component={CrearActividad} />
      </div>
    </BrowserRouter>
  );
}

export default App;
