import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import Cliente from "./pages/cliente";
import Desviacion from "./pages/desviacion";
import Proyeccion from "./pages/proyeccion";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
//import {ToastContainer} from "react-toastify";
//import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/cliente" component={Cliente}/>
          <Route exact path="/desviacion" component={Desviacion}/>
          <Route exact path="/proyeccion" component={Proyeccion}/>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>
      Reto Frontend
    </h1>
  </div>
)

export default App;
