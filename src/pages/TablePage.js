import Table from "../components/Table";

function TablePage() {
  const data = [
    { name: "orange", color: "bg-orange-500", score: 5 },
    { name: "banana", color: "bg-yellow-500", score: 2 },
    { name: "blue berry", color: "bg-blue-500", score: 1 },
    { name: "lime", color: "bg-green-500", score: 4 },
    { name: "plum", color: "bg-purple-500", score: 3 },
  ];
  const config = [
    { label: "Name", render: (fruit) => fruit.name },
    {
      label: "Color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`} />,
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      header: () => <th className="bg-red-500">Score</th>,
    },
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };
  return (
    <div>
      <Table keyFn={keyFn} data={data} config={config} />
    </div>
  );
}
export default TablePage;
