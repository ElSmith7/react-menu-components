import Table from "../components/Table";

function TablePage() {
  const data = [
    { name: "orange", color: "bg-orange-500", score: 5 },
    { name: "banana", color: "bg-yellow-500", score: 2 },
    { name: "blue berry", color: "bg-blue-500", score: 1 },
    { name: "lime", color: "bg-green-500", score: 4 },
    { name: "plum", color: "bg-purple-500", score: 3 },
  ];
  return (
    <div>
      <Table data={data} />
    </div>
  );
}
export default TablePage;
