import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation /*, useNavigate*/ } from "react-router-dom";
// import {Welcome, SearchBar} from './components/index'

import Cards from "./components/Cards/Cards";

function App() {
  const itemsPerPage = 12;

  const [datosFromApi, setDatosFromApi] = useState([]);
  const [character, setCharacter] = useState([]);
  const [currentPage, setcurrentPage] = useState(0);

  const location = useLocation();

  const AllPokemons = async () => {
    try {
      const {data} = await axios("http://localhost:3001/pokemons");
  
      console.log(data);
      if (data) {
        // Supongo que 'datosFromApi' es una función para manejar los datos recibidos
        setDatosFromApi(data);

        const initialPageData = data.slice(0, itemsPerPage);
        setCharacter(initialPageData)
      }
    } catch (error) {
      console.log({error: error.message});
    }
  };

  useEffect(() => {
    AllPokemons();
  }, []);
  
  const nextHandler = () => {
    const totalElementos = datosFromApi.length;
    
    const nextPage = currentPage + 1;
    
    const firstIndex = nextPage * itemsPerPage;
    
    if (firstIndex < totalElementos){
      const nextPageData = datosFromApi.slice(firstIndex, firstIndex + itemsPerPage)
      setCharacter(nextPageData);
      setcurrentPage(nextPage);
    }
  };
    
  
  const prevHandler = () => {
    const prevPage = currentPage - 1;
    
    if (prevPage < 0) return;
    
    const firstIndex = prevPage * itemsPerPage;

    setCharacter([...datosFromApi].splice(firstIndex, itemsPerPage));
    setcurrentPage(prevPage);
  };
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
        <Route
          path="/"
          element={
            <Cards
              // AllPokemons={AllPokemons}
              currentPage={currentPage}
              characters={character}
              nextHandler={nextHandler}
              prevHandler={prevHandler}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
