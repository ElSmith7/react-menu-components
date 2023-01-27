function Table({ data, config, keyFn }) {
  let renderedRows = data.map((rowData) => {
    let renderedCells = config.map((column) => {
      return (
        <td key={column.render(rowData)} className="p-3">
          {column.render(rowData)}
        </td>
      );
    });
    return (
      <tr className="border-b" key={keyFn(rowData)}>
        {renderedCells}
      </tr>
    );
  });
  let renderedHeadings = config.map((heading) => {
    return <th key={heading.label}>{heading.label}</th>;
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeadings}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
