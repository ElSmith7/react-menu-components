import { useState } from "react";
import DropDown from "./components/DropDown";

function App() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  const options = [
    {
      label: "Red",
      value: "red",
    },
    {
      label: "Green",
      value: "green",
    },
    {
      label: "Blue",
      value: "blue",
    },
  ];
  return (
    <DropDown value={selection} onChange={handleSelect} options={options} />
  );
}

export default App;
