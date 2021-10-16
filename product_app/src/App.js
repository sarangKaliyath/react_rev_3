import "./App.css";
import { useState } from "react";
import jsonData from "./MOCK_DATA.json";
import { Card } from "./Components/Card";

function App() {
  const [data, setData] = useState(jsonData);

  const handleAdd = (id) => {
    let temp = data.map((el) => {
      return el.id === id ? { ...el, quantity: el.quantity + 1 } : el;
    });

    setData(temp);
  };
  const handleSub = (id, quantity) => {
    if (quantity) {
      let temp = data.map((el) =>
        el.id === id ? { ...el, quantity: el.quantity - 1 } : el
      );
      setData(temp);
    }
  };

  return (
    <div>
      <div className="head">
        <h1>All Products</h1>
      </div>
      <div className="App">
        {data.map((el) => (
          <Card
            key={el.id}
            data={el}
            handleAdd={handleAdd}
            handleSub={handleSub}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
