import { useState } from "react";

import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./route";

function App() {
  const [count, setCount] = useState(0);
  const content = useRoutes(routes);

  return content;
}

export default App;
