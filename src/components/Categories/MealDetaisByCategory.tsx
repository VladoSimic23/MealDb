import { Link, useParams } from "react-router-dom";
import useFetchDb from "../../fetch/useFetchDb";
import { mealDetailsByID } from "../../urls/urls";
import globalStyles from "../../GlobalStyles/index.module.css";
import NavigateBack from "../utils/NavigateBack";
import styles from "./style/category.module.css";
import Loading from "../Loading/Loading";

const MealDetaisByCategory = () => {
  const { id } = useParams();

  const { data } = useFetchDb(`${mealDetailsByID}${id}`);
  const {
    meals: [meal],
  } = data;

  if (!meal) {
    return <Loading />;
  }

  const {
    strMeal,
    strCategory,
    strArea,
    strInstructions,
    strMealThumb,
    strYoutube,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strIngredient11,
    strIngredient12,
    strIngredient13,
    strIngredient14,
    strIngredient15,
    strIngredient16,
    strIngredient17,
    strIngredient18,
    strIngredient19,
    strIngredient20,
  } = meal;

  return (
    <div className={globalStyles.container}>
      <NavigateBack />
      <div className={styles.mealDetailWrap}>
        <h1>{strMeal}</h1>
        <div className={globalStyles.grid2}>
          <div>
            <img width="472px" height="472px" src={strMealThumb} alt={strMeal} />

            <Link to={`/category/${strCategory}`}>
              <h4>Category: {strCategory}</h4>
            </Link>
            <h4>Area: {strArea}</h4>
            <h4>
              Youtube:{" "}
              <a href={strYoutube} target="_blank" rel="noreferrer">
                Video
              </a>
            </h4>
          </div>
          <div className={styles.ingredients}>
            <div>
              <h3>Ingredients</h3>
              <ul>
                {strIngredient1 && <li>{strIngredient1}</li>}
                {strIngredient2 && <li>{strIngredient2}</li>}
                {strIngredient3 && <li>{strIngredient3}</li>}
                {strIngredient4 && <li>{strIngredient4}</li>}
                {strIngredient5 && <li>{strIngredient5}</li>}
                {strIngredient6 && <li>{strIngredient6}</li>}
                {strIngredient7 && <li>{strIngredient7}</li>}
                {strIngredient8 && <li>{strIngredient8}</li>}
                {strIngredient9 && <li>{strIngredient9}</li>}
                {strIngredient10 && <li>{strIngredient10}</li>}
                {strIngredient11 && <li>{strIngredient11}</li>}
                {strIngredient12 && <li>{strIngredient12}</li>}
                {strIngredient13 && <li>{strIngredient13}</li>}
                {strIngredient14 && <li>{strIngredient14}</li>}
                {strIngredient15 && <li>{strIngredient15}</li>}
                {strIngredient16 && <li>{strIngredient16}</li>}
                {strIngredient17 && <li>{strIngredient17}</li>}
                {strIngredient18 && <li>{strIngredient18}</li>}
                {strIngredient19 && <li>{strIngredient19}</li>}
                {strIngredient20 && <li>{strIngredient20}</li>}
              </ul>
            </div>
          </div>
        </div>
        <p style={{ whiteSpace: "pre-wrap" }}>{strInstructions}</p>
      </div>
    </div>
  );
};

export default MealDetaisByCategory;
