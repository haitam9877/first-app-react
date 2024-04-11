import { useState } from "react";
import List from "./List.js";
import { TestContext } from "./Context.js";
import Place from "./Place.js";
import PlaceImage from "./PlaceImage.js";

export default function App() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={(e) => {
            setIsLarge(e.target.checked);
          }}
        />
        Utiliser de grandes images
      </label>
      <hr />

      <TestContext.Provider
        value={{
          imgSize: imageSize,
        }}
      >
        <List />
      </TestContext.Provider>
    </>
  );
}
