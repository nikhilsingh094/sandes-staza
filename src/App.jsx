import "./App.css";
import Home from "./Pages/HomePage/Home";
import Login from "./components/sandesweb/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatContainer from "./components/sandesweb/ChatContainer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/LoginWeb" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<ChatContainer />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
