import "./App.css";
import Karin from "./assets/Karin_Portrait_full.png";
import Marcoh from "./assets/Marcoh.png";
import Marina from "./assets/Marina.png";

function App() {
  console.log(`APIKEY: ${import.meta.env.VITE_APIKEY}`);
  return (
    <>
      <h1>APP</h1>
      <img src={Karin} alt="" />
      <img src={Marina} alt="" />
      <img src={Marcoh} alt="" />
    </>
  );
}

export default App;
