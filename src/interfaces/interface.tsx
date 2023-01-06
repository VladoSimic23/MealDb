import { Dispatch } from "react";

export interface StateForUsers {
  searchMeal: {
    meals: ObjectWithStringValues[];
    loading: boolean;
    error: string;
  };
}
export interface UserDispatch {
  type: string;
  payload: any;
}
export type ObjectWithStringValues = { [key: string]: string };

/// User initial state interface
export interface InitStateI {
  userState: StateForUsers;
  userDispatch: Dispatch<UserDispatch>;
}
