import Table from "../components/Table";
import SortableTable from "../components/SortableTable";

function TablePage() {
  const data = [
    { name: "orange", color: "bg-orange-500", score: 5 },
    { name: "banana", color: "bg-yellow-500", score: 2 },
    { name: "blue berry", color: "bg-blue-500", score: 1 },
    { name: "lime", color: "bg-green-500", score: 4 },
    { name: "plum", color: "bg-purple-500", score: 3 },
  ];
  const config = [
    {
      label: "Name",
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`} />,
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
    },
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };
  return (
    <div>
      <SortableTable keyFn={keyFn} data={data} config={config} />
    </div>
  );
}
export default TablePage;
