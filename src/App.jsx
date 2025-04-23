import "./App.css";
import Home from "./Pages/HomePage/Home";
import LoginAdmin from "./Pages/LoginAdmin/LoginAdmin";
import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/LoginWeb" element={<Login />} />
        <Route path="/LoginAdmin" element={<LoginAdmin />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
