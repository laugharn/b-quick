import { useState } from "react";

export default () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Count: {count}</h1>
      <button
        className="appearance-none bg-blue p-6 rounded text-white"
        onClick={e => {
          e.preventDefault();
          setCount(count + 1);
        }}
      >
        +
      </button>
    </>
  );
};
