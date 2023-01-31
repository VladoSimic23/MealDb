import {
  ObjectWithStringValues,
  StateForUsers,
  UserDispatch,
} from "../interfaces/interface";

export const mainReducer = (
  state: StateForUsers,
  action: UserDispatch
): StateForUsers => {
  const { type, payload } = action;

  switch (type) {
    case "DEFAULT_MEALS": {
      const {
        data: { meals },
        error,
        loading,
      }: {
        data: { meals: ObjectWithStringValues[] };
        error: string;
        loading: boolean;
      } = payload;

      if (error) {
        const setError = { ...state.searchMeal, error: error };

        return { ...state, searchMeal: setError };
      }
      if (loading) {
        const setLoading = { ...state.searchMeal, loading: true };
        return { ...state, searchMeal: setLoading };
      }
      return {
        ...state,
        searchMeal: { meals: meals, loading: false, error: "" },
      };
    }
    case "SEARCH_MEAL": {
      const {
        data: { meals },
        error,
        loading,
      }: {
        data: { meals: ObjectWithStringValues[] };
        error: string;
        loading: boolean;
      } = payload;

       if (!meals) {
        return {
          ...state,
          searchMeal: { meals: [], loading: false, error: "" },
        };
      }
      
      if (error) {
        const setError = { ...state.searchMeal, error: error };

        return { ...state, searchMeal: setError };
      }
      if (loading) {
        const setLoading = { ...state.searchMeal, loading: true };
        return { ...state, searchMeal: setLoading };
      }
      return {
        ...state,
        searchMeal: { meals: meals, loading: false, error: "" },
      };
    }
  }

  return state;
};
