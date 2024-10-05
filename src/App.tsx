import { useState } from "react";
import "./App.css";

function intersection(a: number[], b: number[]) {
  return a.filter((value) => b.indexOf(value) !== -1);
}
function not(a: number[], b: number[]) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function App() {
  const [checked, setChecked] = useState<number[]>([]);
  const [left, setLeft] = useState([0, 1, 2, 3]);
  const [right, setRight] = useState([4, 5, 6, 7]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value: number) => {
    //if checked already have value
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  const handleAllRight = () => {
    setRight(right.concat(left));
    setLeft([]);
  };
  const handleAllLeft = () => {
    // another method
    setLeft([...left, ...right]);
    setRight([]);
  };

  const handleCheckRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const customList = (items: number[]) => (
    <div className="list">
      <ul>
        {items.map((value) => {
          const labelId = `transfer-list-item-${value}-label`;
          return (
            <li key={value}>
              <input
                type="checkbox"
                id={labelId}
                onChange={() => handleToggle(value)}
                checked={checked.indexOf(value) !== -1}
              />
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
        <button onClick={handleAllRight}>&gt;&gt;</button>
        <button onClick={handleCheckRight} disabled={leftChecked.length === 0}>
          &gt;
        </button>
        <button onClick={handleCheckLeft} disabled={rightChecked.length === 0}>
          &lt;
        </button>
        <button onClick={handleAllLeft}>&lt;&lt;</button>
      </div>
      <div className="list-container">{customList(right)}</div>
    </div>
  );
}

export default App;
