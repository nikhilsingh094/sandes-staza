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
import MemberPage from "./components/Dashboard/MemberPage";
import EmployeHeatMap from "./components/Dashboard/EmployeHeatMap";
import Designation from "./Pages/Designation/Designation";
import LoginManagement from "./Pages/LoginManagement/LoginManagement";
import Searchmember from "./Pages/Searchmember/Searchmember";
import GroupManagement from "./Pages/GroupManagement/GroupManagement";
import ImportEmployees from "./Pages/ImportEmployees/ImportEmployees";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/ImportEmployees" element={<ImportEmployees />} />
        <Route path="/GroupManagement" element={<GroupManagement />} />
        <Route path="/Searchmember" element={<Searchmember />} />
        <Route path="/LoginManagement" element={<LoginManagement />} />
        <Route path="/Designation" element={<Designation />} />
        <Route path="/MemberPage" element={<MemberPage />} />
        <Route path="/HeatMap" element={<EmployeHeatMap />} />
        <Route path="/OrganizationUnit" element={<OrganizationUnit />} />
        <Route path="/OrganizationOverview" element={<OrganizationOverview />} />
        <Route path="/APPInsights" element={<APPInsights />} />
        <Route path="/Dlinks" element={<Dlinks />} /> */}
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
