import { useState } from "react";
import Input from "./Input.jsx";
import Boxes from "./Boxes.jsx";
import { generateBoxes, generateRandomRGBColor } from "../utility/utility.js";

const initialSize = 20;
const initialBoxes = generateBoxes(initialSize);

export default function ColorBoxes() {
  const [numberOfBoxes, setNumberOfBoxes] = useState(initialSize);
  const [boxes, setBoxes] = useState(initialBoxes);

  function handleSetBoxes() {
    const newBoxes = generateBoxes(numberOfBoxes);
    setBoxes(newBoxes);
  }

  function handleChangeBoxColor(index) {
    const newBoxes = [...boxes];
    newBoxes[index] = generateRandomRGBColor();
    setBoxes(newBoxes);
  }

  return (
    <div>
      <Input
        handleSetBoxes={handleSetBoxes}
        setNumberOfBoxes={setNumberOfBoxes}
      />
      <Boxes boxes={boxes} handleChangeBoxColor={handleChangeBoxColor} />
    </div>
  );
}
