function DropDown({ options }) {
  const renderedOptions = options.map((option) => {
    return <div key={option.value}>{option.label}</div>;
  });
  return <div>{renderedOptions}</div>;
}

export default DropDown;
