import SearchedMealList from "./SearchedMealList";
import SearchMeal from "./SearchMeal";
import globalStyles from "../../GlobalStyles/index.module.css";

const Home = () => {
  return (
    <div className={globalStyles.container}>
      <SearchMeal />
      <SearchedMealList />
    </div>
  );
};

export default Home;
