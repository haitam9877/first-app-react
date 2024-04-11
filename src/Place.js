import { useContext } from "react";
import PlaceImage from "./PlaceImage";
import { TestContext } from "./Context";

export default function Place() {
  const tsetContext = useContext(TestContext);

  return (
    <>
      <PlaceImage />
      <p>
        <b>{tsetContext.Place}</b>
        {": " + tsetContext.places}
      </p>
    </>
  );
}
