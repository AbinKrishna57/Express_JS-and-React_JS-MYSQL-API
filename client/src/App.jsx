import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/createAccount/Login";
import Create from "./components/createAccount/create";
import Logout from "./components/createAccount/Logout";
import EmployeeHome from "./components/employee/EmployeeHome";
import HrHome from "./components/HR/HrHome";
import Mhome from "./components/manager/Mhome";
import PresidentHome from "./components/president/presidentHome";
import VPresidentHome from "./components/vPresident/vPresidentHome";
import CEOHome from "./components/ceo/ceoHome";
import AdminHome from "./components/admin/adminHome";
import AddEmployee from "./components/employee/AddEmployee";
import AddDepartments from "./components/employee/AddDepartment";
import AddManager from "./components/employee/AddManagers";
import ShowEmployee from "./components/employee/ShowEmployee";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/employee/home" element={<EmployeeHome />}></Route>
        <Route path="/HR/home" element={<HrHome />}></Route>
        <Route path="/manager/home" element={<Mhome />}></Route>
        <Route path="/createAccount/create" element={<Create />}></Route>
        <Route path="/president/home" element={<PresidentHome />}></Route>
        <Route path="/vice-president/home" element={<VPresidentHome />}></Route>
        <Route path="/ceo/home" element={<CEOHome />}></Route>
        <Route path="/admin/home" element={<AdminHome />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/show/Employees" element={<ShowEmployee />}></Route>
        <Route path="/add/Employees" element={<AddEmployee />}></Route>
        <Route path="/add/Departments" element={<AddDepartments />}></Route>
        <Route path="/add/Managers" element={<AddManager />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
