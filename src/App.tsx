import "./App.css";
import Router from "./router/Router";
import bgImage from "../src/assets/chat-bg.png";

function App() {
  return (
    <div
      className="md:px-2"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Router />
    </div>
  );
}

export default App;
