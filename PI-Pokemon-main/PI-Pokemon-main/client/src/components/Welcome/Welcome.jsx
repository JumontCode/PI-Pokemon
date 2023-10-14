import styles from "./welcome.module.css";
import imgWelcome from "../../resources/pokemon.jpg";

export default function welcome() {
  return (
    <div className={styles.welcome} /**/>
      <br />
      <h1 className={styles.title}>Welcome to the official page of Pokemon</h1>

      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <div className={styles.infoText}>
            <div className={styles.text}>
              <h2 className={styles.title}>
                Todo la información que necesitas sobre Pokemones
              </h2>
              <br />
              <p className={styles.subText}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-check"
                  width="20"
                  height="18"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ff0303"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>{" "}
                Más de 500 pokemones
              </p>
              <p className={styles.subText}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-check"
                  width="20"
                  height="18"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ff0303"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>{" "}
                información detallada y concisa
              </p>
              <p className={styles.subText}>
                Qué esperas, haz click en acceder y descubre todo lo que tenemos para ti
              </p>
            </div>
            <br />
            <button className={styles.infoButton}>Acceder</button>
          </div>
        </div>
        <div className={styles.infoImg}>
          <img className={styles.welcomeImg} src={imgWelcome} alt="" />
        </div>
      </div>
    </div>
  );
}
