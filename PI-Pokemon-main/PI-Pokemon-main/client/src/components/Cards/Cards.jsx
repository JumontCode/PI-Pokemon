import React from "react"; //creado para el paginado
import Card from "../Card/Card";
import styles from "./cards.module.css";


export default function Cards(props) {

  if (!Array.isArray(props.characters) || props.characters.length === 0) {
    return <div>No hay datos disponibles.</div>;
  }

  const items = props.characters.map((character, index) => {
    return (
      <Card
        key={character.id}
        name={character.name}
        images={character.images}
        types={character.types}
      />
    );
  });

  return (
    <div >
      <div className={styles.containerCards}>
        <h1>Pagina: {props.currentPage}</h1>
        <>{items}</>
      </div>

      <div className={styles.btnContainer}>
        <button onClick={props.prevHandler}>Prev</button>
        <button onClick={props.nextHandler}>Next</button>
      </div>
    </div>
  );
}
