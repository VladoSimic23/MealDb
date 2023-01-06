import styles from "./styles/pagination.module.css";

interface PaginationI {
  totalPages: number;
  currentPage: number;
  handlePageChange: (page: number) => void;
}

const Pagination = ({
  totalPages,
  currentPage,
  handlePageChange,
}: PaginationI) => {
  return (
    <div className={styles.pagination}>
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          className={i + 1 === currentPage ? styles.active : ""}
          onClick={() => handlePageChange(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
