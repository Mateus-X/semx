import { Outlet } from "react-router-dom";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="Menu">
        <h1 style={{ textAlign: "center" }}>Sistema Eleitoral MX</h1>
        <Home />
      </div>
      <Outlet />
    </div>
  );
}

export default App;
