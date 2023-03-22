import { useGlobalContext } from "../../contextApi/context";
import styles from "./styles/searchMeal.module.css";
import globalStyles from "../../GlobalStyles/index.module.css";
import { Link } from "react-router-dom";
import usePagination from "../Pagination/usePagination";
import Pagination from "../Pagination/Pagination";
import Loading from "../Loading/Loading";

const SearchedMealList = () => {
  const {
    userState: {
      searchMeal: { meals, loading, error },
    },
  } = useGlobalContext();

  const { slicedMeals, totalPages, handlePageChange, currentPage } =
    usePagination(meals, 8);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  if (meals.length < 1) {
    return <h1>No results</h1>;
  }

  return (
    <div className={styles.mealListWrapper}>
      <div className={globalStyles.grid4}>
        {slicedMeals.map((item) => {
          const { strMeal, idMeal, strMealThumb } = item;
          return (
            <div key={idMeal} className={styles.mealListItem}>
              <Link to={`meal-detail/${idMeal}`}>
                <img width={185} height={185} src={strMealThumb} alt={strMeal} />
                <h2>{strMeal}</h2>
              </Link>
            </div>
          );
        })}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default SearchedMealList;
