import "./reset.scss";
import "./container.scss";
import "./body.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RoutesMain } from "./Routes/RoutesMain";
import { TechProvider } from "./providers/TechContext";

function App() {
  return (
    <main>
      <TechProvider>
        <RoutesMain />
      </TechProvider>
      <ToastContainer />
    </main>
  );
}
export default App;
