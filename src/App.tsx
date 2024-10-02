import { useState } from "react";
import "./App.css";

function App() {
  const [left, setLeft] = useState([0, 1, 2, 3]);
  const [right, setRight] = useState([4, 5, 6, 7]);

  const customList = (items: number[]) => (
    <div className="list">
      <ul>
        {items.map((value) => {
          const labelId = `transfer-list-item-${value}-label`;
          return (
            <li key={value}>
              <input type="checkbox" id={labelId} />
              <label htmlFor={labelId}>List item {value + 1}</label>
            </li>
          );
        })}
      </ul>
    </div>
  );

  return (
    <div className="transfer-list">
      <div className="list-container">{customList(left)}</div>

      <div className="buttons-container">
        <button>&gt;&gt;</button>
        <button>&gt;</button>
        <button>&lt;</button>
        <button>&lt;&lt;</button>
      </div>
      <div className="list-container">{customList(right)}</div>
    </div>
  );
}

export default App;
