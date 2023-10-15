import "./App.css";
import { Routes, Route, useLocation /*, useNavigate*/ } from "react-router-dom";
// import {Welcome, SearchBar} from './components/index'

import Cards from "./components/Cards/Cards";
import image1 from "../src/resources/Characters/images-1.jpeg";
import image2 from "../src/resources/Characters/images-2.webp";
import image3 from "../src/resources/Characters/images-3.jpeg";
import image4 from "../src/resources/Characters/images-4.png";
import image5 from "../src/resources/Characters/images-5.jpeg";

const character = [
  { id: 1, name: "Juan", type: "fire", image: image1 },
  { id: 2, name: "Lucas", type: "fly", image: image2 },
  { id: 3, name: "Matias", type: "flower", image: image3 },
  { id: 4, name: "Luis", type: "magic", image: image4 },
  { id: 5, name: "Sandy", type: "rayn", image: image5 },
  { id: 1, name: "Juan", type: "fire", image: image1 },
  { id: 2, name: "Lucas", type: "fly", image: image2 },
  { id: 3, name: "Matias", type: "flower", image: image3 },
  { id: 4, name: "Luis", type: "magic", image: image4 },
  { id: 5, name: "Sandy", type: "rayn", image: image5 },
  { id: 1, name: "Juan", type: "fire", image: image1 },
  { id: 2, name: "Lucas", type: "fly", image: image2 },
];

function App() {
  const location = useLocation();

  //funcion para cambiar el fondo dependiendo la ruta
  const bgImage = () => {
    if (location.pathname === "/") {
      return "welcome";
    } else if (location.pathname === "/home") {
      return "App";
    } else if (location.pathname.startsWith("/detail")) {
      return "detail";
    } else if (location.pathname === "/favorites") {
      return "favorites";
    } else if (location.pathname === "/about") {
      return "about";
    }
  };

  return (
    <div className={bgImage()}>
      {/* <h1>Henry Pokemon</h1> */}
      <Routes>
        {/* <Route path="/" element={<Welcome />} /> */}
        <Route path="/" element={<Cards characters={character} />} />
      </Routes>
    </div>
  );
}

export default App;
