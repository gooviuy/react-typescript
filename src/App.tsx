import React, { useEffect, useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { List } from "./components/List";
import { Sub } from "./types";

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
];

//definimos el contrato :
/* interface Sub {
  nickName: string;
  age: number;
  description?: string;
  icon?: string;
}
 */
function App() {
  //definimos que el estado sera una array del contrato Sub, que se inicializa vacio.
  const [subs, setSubs] = useState<Array<Sub>>([]);
  //Otra forma de definirlo:
  /* const [subs, setSubs] = useState<Sub[]>([]); */

  useEffect(() => setSubs(INITIAL_STATE), []);

  const handleNewSub = (newSub: Sub): void => {
    setSubs((subs) => [...subs, newSub]);
  };

  return (
    <div className="App">
      <h1>New application</h1>
      <List subs={subs} />
      <Form onNewSub={handleNewSub} />
    </div>
  );
}

export default App;
