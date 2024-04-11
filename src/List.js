import Place from "./Place.js";
import { places } from "./Data.js";
import { useContext } from "react";
import { TestContext } from "./Context.js";

export default function List() {
  const test = useContext(TestContext);
  const listItems = places.map((place) => (
    <li key={place.id}>
      <Place />
    </li>
  ));
  return <ul>{listItems}</ul>;
}
