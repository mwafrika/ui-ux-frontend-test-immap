import { useState, useEffect } from "react";
import List from "./components/List";
import data from "./assets/data.js";

function App() {
  const [items, setItems] = useState(data);

  useEffect(() => {
    setItems(data);
  }, []);

  return (
    <div className="App">
      <List items={items} />
    </div>
  );
}

export default App;
