import "./App.css";
import Home from "./Pages/HomePage/Home";
import LoginAdmin from "./Pages/LoginAdmin/LoginAdmin";
import Login from "./components/Login";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Dlinks from "./Pages/Dlinks/Dlinks";
import APPInsights from "./Pages/APPInsights/APPInsights";
import OrganizationOverview from "./components/Dashboard/OrganizationOverview";
import OrganizationUnit from "./Pages/OrganizationUnit/OrganizationUnit";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/OrganizationUnit" element={<OrganizationUnit />} />
        <Route path="/OrganizationOverview" element={<OrganizationOverview />} />
        <Route path="/APPInsights" element={<APPInsights />} />
        <Route path="/Dlinks" element={<Dlinks />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/LoginWeb" element={<Login />} />
        <Route path="/LoginAdmin" element={<LoginAdmin />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <ToastContainer />

    </Router>
  );
}

export default App;
