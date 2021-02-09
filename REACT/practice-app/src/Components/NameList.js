import React from "react";
import Person from "./Person";

function NameList() {
  const names = ["Bruce", "Clack", "Diana"];

  // const persons = [
  //   {
  //     id: 1,
  //     name: "Bruce",
  //     age: 30,
  //     skill: "React",
  //   },
  //   {
  //     id: 2,
  //     name: "Dianna",
  //     age: 28,
  //     skill: "Vue",
  //   },
  //   {
  //     id: 3,
  //     name: "Clark",
  //     age: 26,
  //     skill: "Angular",
  //   },
  // ];

  const nameList = names.map((name) => <h2 key={name}>{name}</h2>);
  return <div>{nameList}</div>;
}

export default NameList;
