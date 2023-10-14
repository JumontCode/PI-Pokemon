import styles from "./card.module.css";
import { Link } from "react-router-dom";

// import image from "../../resources/Characters/images-1.jpeg";

export default function Card({id,name,types,image}) {
  return (

    <div className={styles.containerCard}>
      <div className={styles.card}>
        <div className={styles.buttonContainer}>
          <img src={image} alt="" />
        </div>

        <div className={styles.info}>
          <Link to={`/detail/${id}`}>
            <h2>{"Nombre:"}</h2>
          </Link>
          <h2>{"Tipos"}</h2>
        </div>
      </div>
    </div>
  );
}
