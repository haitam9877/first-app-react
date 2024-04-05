import { useState } from "react";

let nxetCunt = 5;
export default function MystatsArry() {
  const [addTask, setAddTask] = useState("");

  const [arry, setArry] = useState([
    { id: 1, name: "Html" },
    { id: 2, name: "Java Script" },
    { id: 3, name: "Css" },
    { id: 4, name: "React" },
  ]);
  const arryList = arry.map((arry) => {
    return (
      <li key={arry.id}>
        {arry.name}
        <button
          onClick={() => {
            deleted(arry.id);
          }}
        >
          Delete
        </button>
      </li>
    );
  });

  function setTaskNew() {
    setArry([...arry, { id: nxetCunt, name: addTask }]);

    nxetCunt += 1;
    setAddTask("");
  }

  function deleted(id) {
    const newArry = arry.filter((arry) => {
      return arry.id !== id;
    });
    setArry(newArry);
  }

  return (
    <>
      {arryList}

      <input
        value={addTask}
        placeholder="Add New"
        onChange={(e) => {
          setAddTask(e.target.value);
        }}
      />

      <button onClick={setTaskNew}>seve</button>
    </>
  );
}
