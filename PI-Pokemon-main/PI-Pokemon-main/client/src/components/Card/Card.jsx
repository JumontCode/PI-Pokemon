import styles from "./card.module.css";
import { Link } from "react-router-dom";


export default function Card({id,name,types,images}) {
  return (

    <div className={styles.containerCard}>
      <div className={styles.card}>
        <div className={styles.buttonContainer}>
          <img src={images.front_default} alt='' />
        </div>

        <div className={styles.info}>
          <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
          </Link>
          <h2>{types}</h2>
        </div>
      </div>
    </div>
  );
}
