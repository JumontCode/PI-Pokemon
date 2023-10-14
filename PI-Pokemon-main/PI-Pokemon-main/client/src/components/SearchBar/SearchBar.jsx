import styles from "./searchBar.module.css";

export default function SearchBar(){
    return(
        <div className={styles.searchContainer}>
            <div>
        <input
          size="10"
          type="search"
          placeholder="Agregar ID"
        />
      </div>
      <div>
        <button>Buscar</button>
      </div>
        </div>
    )
}