import './App.css';
import { Routes, Route, useLocation /*, useNavigate*/ } from "react-router-dom";
// import {Welcome, SearchBar} from './components/index'

 import Card from './components/Card/Card'

function App() {

  const location = useLocation();

   //funcion para cambiar el fondo dependiendo la ruta
   const bgImage = () =>{
    if (location.pathname === "/") {
      return "welcome"
    }
    else if (location.pathname === "/home") {
      return "App";
    }else if (location.pathname.startsWith("/detail")) {
      return "detail";
    } else if (location.pathname === "/favorites") {
      return "favorites";
    } else if (location.pathname === "/about") {
      return "about";
    } 
  }

  return (
    <div className={bgImage()}>
      {/* <h1>Henry Pokemon</h1> */}
      <Routes>

        {/* <Route path="/" element={<Welcome />} /> */}
        <Route path="/" element={<Card />} />
      </Routes>
    </div>
  );
}

export default App;
