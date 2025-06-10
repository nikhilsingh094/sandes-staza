import "./App.css";
import Home from "./Pages/HomePage/Home";
import Login from "./components/sandesweb/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatContainer from "./components/sandesweb/ChatContainer";

function App() {

  const path = window.location.pathname;

  let jid, password, to;

  if (path.includes("user1")) {
    jid = "user1@localhost";
    password = "123456";
    to = "user2@localhost";
  } else if (path.includes("user2")) {
    jid = "user2@localhost";
    password = "123456";
    to = "user1@localhost";
  }

  if (!jid) {
    return (
      <div className="text-center mt-10 text-lg font-bold">
        ❌ Add `/user1` or `/user2` in the URL
      </div>
    );
  }


  return (
    <ChatContainer jid={jid} password={password} to={to} />
    // <Router>
    //   <Routes>
    //     <Route path="/LoginWeb" element={<Login />} />
    //     <Route path="/" element={<Home />} />
    //     <Route path="/chat" element={} />
    //   </Routes>
    //   <ToastContainer />
    // </Router>
  );
}

export default App;
