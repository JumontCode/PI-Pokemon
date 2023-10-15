import styles from "./card.module.css";
import { Link } from "react-router-dom";

// import image from "../../resources/Characters/images-1.jpeg";

export default function Card({id,name,type,image}) {
  return (

    <div className={styles.containerCard}>
      <div className={styles.card}>
        <div className={styles.buttonContainer}>
          <img src={image} alt="" />
        </div>

        <div className={styles.info}>
          <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
          </Link>
          <h2>{type}</h2>
        </div>
      </div>
    </div>
  );
}
