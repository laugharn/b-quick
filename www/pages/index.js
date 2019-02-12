import "../styles/index.css";

import { useEffect, useState } from "react";

const Page = props => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You have clicked the button {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Page;
