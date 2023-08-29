import { useState } from "react";
const User = ({ name }) => {
  const [count, setCount] = useState(1);
  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3> Location: Nahan</h3>
      <h3> Contact: pathbhatnagar</h3>
      <h4> Count: {count}</h4>
    </div>
  );
};

export default User;
