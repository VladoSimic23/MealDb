import { useState } from "react";
import { ObjectWithStringValues } from "../../interfaces/interface";

const usePagination = (
  meals: ObjectWithStringValues[],
  itemsPerPage: number
) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(meals.length / itemsPerPage);
  const slicedMeals = meals.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return { currentPage, totalPages, slicedMeals, handlePageChange };
};

export default usePagination;
