import { Route, Routes } from "react-router-dom";
import NotFound from "./components/404Page/NotFound";
import FilterByCategory from "./components/Categories/FilterByCategory";
import ListAllCategories from "./components/Categories/ListAllCategories";
import MealDetaisByCategory from "./components/Categories/MealDetaisByCategory";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import globalStyles from "./GlobalStyles/index.module.css";

const App = () => {
  return (
    <div>
      <h1>Bla Bla</h1>
      <Nav />
      <div className={globalStyles.appWrapper}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meal-detail/:id" element={<MealDetaisByCategory />} />
          <Route path="/category" element={<ListAllCategories />} />
          <Route path="/category/:id" element={<FilterByCategory />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
