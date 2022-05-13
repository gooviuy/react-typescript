import React, { useEffect, useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { List } from "./components/List";

const INITIAL_STATE = [
  {
    nickName: "Gonza",
    age: 25,
    description: "Full stack developer junior",
    icon: "https://i.pravatar.cc/150?u=gonza",
  },
  {
    nickName: "Tincho",
    age: 22,
    description: "Frontend developer junior",
    icon: "https://i.pravatar.cc/150?u=tincho",
  },
  {
    nickName: "Rolo",
    age: 24,
    icon: "https://i.pravatar.cc/150?u=pepito",
  },
];

//definimos el contrato :
interface Sub {
  nickName: string;
  age: number;
  description?: string;
  icon?: string;
}

function App() {
  //definimos que el estado sera una array del contrato Sub, que se inicializa vacio.
  const [subs, setSubs] = useState<Array<Sub>>([]);
  //Otra forma de definirlo:
  /* const [subs, setSubs] = useState<Sub[]>([]); */

  useEffect(() => setSubs(INITIAL_STATE), []);

  return (
    <div className="App">
      <h1>Gonza Typescript</h1>
      <List subs={subs} />
      <Form />
    </div>
  );
}

export default App;
