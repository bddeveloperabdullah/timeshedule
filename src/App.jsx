import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content" element={<Home />} />
        <Route path="/notifactions" element={<Home />} />
        <Route path="/insights" element={<Home />} />
        <Route path="/todo" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
