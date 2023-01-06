import { useNavigate } from "react-router-dom";
import globalStyles from "../../GlobalStyles/index.module.css";

const NavigateBack = () => {
  const navigate = useNavigate();
  return (
    <div className={globalStyles.navigate}>
      <button className={globalStyles.navigateBtn} onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
};

export default NavigateBack;
