import { useEffect, useState } from "react";
import { useGlobalContext } from "../../contextApi/context";
import useFetchDb from "../../fetch/useFetchDb";
import { searchMeal } from "../../urls/urls";
import styles from "./styles/searchMeal.module.css";

const SearchMeal = () => {
  const [search, setSearch] = useState("");
  const { userDispatch } = useGlobalContext();
  const { data, loading, error } = useFetchDb(`${searchMeal}${search}`);

  useEffect(() => {
    if (!search) {
      userDispatch({
        type: "DEFAULT_MEALS",
        payload: { data, loading, error },
      });
    }
  }, [data, error, loading, search, userDispatch]);

  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    userDispatch({ type: "SEARCH_MEAL", payload: { data, loading, error } });
  };
  return (
    <div>
      <form className={styles.form} onSubmit={handleSearch}>
        <input
          placeholder="search for a meal..."
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchMeal;
