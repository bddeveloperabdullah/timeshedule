import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Content from "./components/Content/Content";
import Notifactions from "./components/Notifactions/Notifactions";
import Insights from "./components/Insights/Insights";
import Setting from "./components/Setting/Setting";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content" element={<Content />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/notifactions" element={<Notifactions />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </>
  );
}

export default App;
