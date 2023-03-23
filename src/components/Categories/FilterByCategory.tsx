import { Link, useParams } from "react-router-dom";
import useFetchDb from "../../fetch/useFetchDb";
import { ObjectWithStringValues } from "../../interfaces/interface";
import { filterByCateg } from "../../urls/urls";
import globalStyles from "../../GlobalStyles/index.module.css";
import NavigateBack from "../utils/NavigateBack";
import usePagination from "../Pagination/usePagination";
import Pagination from "../Pagination/Pagination";
import Loading from "../Loading/Loading";
import styles from "./style/category.module.css";

const FilterByCategory = () => {
  const { id } = useParams();
  const {
    data: { meals },
    error,
    loading,
  } = useFetchDb(`${filterByCateg}${id}`);
  const { slicedMeals, handlePageChange, totalPages, currentPage } =
    usePagination(meals, 8);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className={globalStyles.container}>
      <NavigateBack />
      <div className={styles.mealDetailWrap}>
        <h1>{id}</h1>
      </div>
      <div className={globalStyles.grid4}>
        {slicedMeals.map((meal: ObjectWithStringValues) => {
          const { strMeal, idMeal, strMealThumb } = meal;
          return (
            <div key={idMeal}>
              <Link to={`../../meal-detail/${idMeal}`}>
                <div>
                  <img src={strMealThumb} alt={strMeal} />
                  <h3>{strMeal}</h3>
                </div>
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

export default FilterByCategory;
