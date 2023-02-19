import { useState } from "react";
import "./App.css";
import List from "./components/List";
import data from "./assets/data.js";

function App() {
  const [items, setItems] = useState(data);

  return (
    <div className="App">
      <List
        items={items}
        onButtonClick={(id) => {
          setItems(items.filter((item) => item.id !== id));
        }}
      />
    </div>
  );
}

export default App;
