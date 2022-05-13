import React, { useState } from "react";

export const Form = () => {
  const [inputValues, setInputValues] = useState({
    nickName: "",
    age: 0,
    description: "",
    icon: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  //para analizar el tipo que tiene el evento debemos hacer hover, sobre el evento dentro
  //del input event.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
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
        </form>
        <button type="submit">Save your data !</button>
      </div>
    </>
  );
};
