import { useContext } from "react";
import { getImageUrl } from "./utils.js";
import { TestContext } from "./Context.js";

export default function PlaceImage() {
  const tsetContext = useContext(TestContext);
  return (
    <img
      src={getImageUrl(tsetContext.places)}
      alt={tsetContext.places}
      width={tsetContext.imgSize}
      height={tsetContext.imgSize}
    />
  );
}
