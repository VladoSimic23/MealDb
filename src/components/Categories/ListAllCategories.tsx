import useFetchDb from "../../fetch/useFetchDb";
import { listCategoires } from "../../urls/urls";
import globalStyles from "../../GlobalStyles/index.module.css";
import styles from "./style/category.module.css";
import { Link } from "react-router-dom";
import NavigateBack from "../utils/NavigateBack";
import usePagination from "../Pagination/usePagination";
import Pagination from "../Pagination/Pagination";
import Loading from "../Loading/Loading";

const ListAllCategories = () => {
  const { data, loading, error } = useFetchDb(listCategoires);
  const { meals } = data;
  const { currentPage, slicedMeals, handlePageChange, totalPages } =
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
        <h1>List of all Categories</h1>
      </div>

      <div className={globalStyles.grid3}>
        {slicedMeals.map((meal, index) => {
          return (
            <div className={styles.categoryItem} key={index}>
              <Link to={meal.strCategory}>
                <h2>{meal.strCategory}</h2>
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

export default ListAllCategories;
