import useNewSubForm from "../hooks/useNewSubForm";
import { Sub } from "../types";

/* interface FormState {
  inputValues: Sub;
} */

interface FormProps {
  /* onNewSub: React.Dispatch<React.SetStateAction<Sub[]>>; */
  onNewSub: (newSub: Sub) => void;
}

/* const INITIAL_STATE = {
  nickName: "",
  age: 0,
  description: "",
  icon: "",
}; */

/* type FormReducerAction =
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
 */
/* const formReducer = (
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
}; */

export const Form = ({ onNewSub }: FormProps) => {
  /*   const [inputValues, setInputValues] =useState<FormState["inputValues"]>(INITIAL_STATE); */
  /* const [inputValues, dispatch] = useReducer(formReducer, INITIAL_STATE); */

  const [inputValues, dispatch] = useNewSubForm();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    /* onNewSub((subs) => [...subs, inputValues]); */
    onNewSub(inputValues);
    /*   handleClear(); */
    dispatch({ type: "clear" });
  };

  //para analizar el tipo que tiene el evento debemos hacer hover, sobre el evento dentro
  //del input event.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    /*    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    }); */
    const { name, value } = e.target;
    dispatch({
      type: "change_value",
      payload: {
        inputName: name,
        inputValue: value,
      },
    });
  };

  const handleClear = () => {
    /* setInputValues(INITIAL_STATE); */
    dispatch({ type: "clear" });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={inputValues.nickName}
          type="text"
          name="nickName"
          placeholder="nickName"
        />
        <input
          onChange={handleChange}
          value={inputValues.age}
          type="text"
          name="age"
          placeholder="age"
        />
        <input
          onChange={handleChange}
          value={inputValues.description}
          type="text"
          name="description"
          placeholder="description"
        />
        <input
          onChange={handleChange}
          value={inputValues.icon}
          type="text"
          name="icon"
          placeholder="icon"
        />
        <button type="button" onClick={handleClear}>
          Clear
        </button>
        <button type="submit">Save your data !</button>
      </form>
    </div>
  );
};
