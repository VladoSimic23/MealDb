import { createContext, Reducer, useContext, useReducer } from "react";
import {
  InitStateI,
  StateForUsers,
  UserDispatch,
} from "../interfaces/interface";
import { mainReducer } from "../reducers/mainReducer";

const myState: StateForUsers = {
  searchMeal: { meals: [], loading: false, error: "" },
};
export const AppContext = createContext<InitStateI>({
  userState: myState,
  userDispatch: () => null,
});

export const ContextProvider = ({ children }: { children: JSX.Element }) => {
  const [userState, userDispatch] = useReducer<
    Reducer<StateForUsers, UserDispatch>
  >(mainReducer, myState);

  return (
    <AppContext.Provider value={{ userState, userDispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
