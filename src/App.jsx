import { Outlet } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <h1>Sistema Eleitoral MX</h1>
      <Home />
      <Outlet />
    </div>
  );
}

export default App;
