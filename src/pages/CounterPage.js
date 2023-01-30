import { useState, useEffect } from "react";

function CounterPage({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log(count);
  }, [count]);
  return (
    <div>
      <h1>Count is {count}</h1>
    </div>
  );
}
export default CounterPage;
