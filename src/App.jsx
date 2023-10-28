import "./reset.css";
import "./container.css";
import "./body.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RoutesMain } from "./Routes/RoutesMain";

function App() {
  return (
      <main>
        <RoutesMain />
        <ToastContainer />
      </main>
  );
};
export default App
