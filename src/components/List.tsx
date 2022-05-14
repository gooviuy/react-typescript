import React from "react";
import { Sub } from "../types";

/* interface Props {
  subs: Array<{
    nickName: string;
    age: number;
    description?: string;
    icon?: string;
  }>;
} */

//Reutilizamos la inteface Sub.
interface Props {
  subs: Array<Sub>;
}

export const List: React.FC<Props> = ({ subs }) => {
  return (
    <ul>
      {subs.map((sub) => {
        return (
          <ul>
            <li key={sub.nickName}>
              <img src={sub.icon} alt={`Icon for ${sub.nickName}`} />
              <h4>
                {sub.nickName} (<small>{sub.age}</small>){" "}
              </h4>
              <p>{sub.description} </p>
            </li>
          </ul>
        );
      })}
    </ul>
  );
};
