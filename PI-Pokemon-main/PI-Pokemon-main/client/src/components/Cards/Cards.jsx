import Card from "../Card/Card";
import styles from "./cards.module.css"

export default function Cards({ characters }) {
  return (
      <div className={styles.containerCards}>
      {characters.map(character => (
        <Card 
          key={character.id}
          name={character.name}
          image={character.image}
          type={character.type}
        />
      ))}
      </div>
  );
}