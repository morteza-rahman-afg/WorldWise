import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";
import { useCities } from "../contexts/CitiesContexte";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function CityItems({ cityItem }) {
  const { currentCity, deleteCity } = useCities();
  function handleClick(e) {
    e.preventDefault();
    deleteCity(cityItem.id);
  }
  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          currentCity.id === cityItem.id ? styles["cityItem--active"] : ""
        }`}
        to={`${cityItem.id}?lat=${cityItem.position.lat}&lng=${cityItem.position.lng}`}
      >
        <span className={styles.emoji}>{cityItem.emoji}</span>
        <h3 className={styles.name}>{cityItem.cityName}</h3>
        <time className={styles.date}>{formatDate(cityItem.date)}</time>
        <button onClick={handleClick} className={styles.deleteBtn}>
          +
        </button>
      </Link>
    </li>
  );
}

export default CityItems;
