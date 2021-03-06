import { useReducer } from "react";
import { Sub } from "../types";

interface FormState {
  inputValues: Sub;
}

type FormReducerAction =
  | {
      type: "change_value";
      payload: {
        inputName: string;
        inputValue: string;
      };
    }
  | {
      type: "clear";
    };

const INITIAL_STATE = {
  nickName: "",
  age: 0,
  description: "",
  icon: "",
};

const formReducer = (
  state: FormState["inputValues"],
  action: FormReducerAction
) => {
  switch (action.type) {
    case "change_value":
      const { inputName, inputValue } = action.payload;
      return {
        ...state,
        [inputName]: inputValue,
        ///      [e.target.name]: e.target.value, Es lo mismo qe hacemos en handle change, solo que sin el evento.
      };
    case "clear":
      return INITIAL_STATE;

    default:
      return state;
  }
};

const useNewSubForm = () => {
  return useReducer(formReducer, INITIAL_STATE);
};

export default useNewSubForm;
