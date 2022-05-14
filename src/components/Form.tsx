import useNewSubForm from "../hooks/useNewSubForm";
import { Sub } from "../types";

interface FormProps {
  onNewSub: (newSub: Sub) => void;
}

export const Form = ({ onNewSub }: FormProps) => {
  const [inputValues, dispatch] = useNewSubForm();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onNewSub(inputValues);
    dispatch({ type: "clear" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
