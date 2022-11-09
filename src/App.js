import "./App.css";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./component/Home";
import Dashboard from "./component/Deshboard";
import Customermanagement from "./component/DashboardListBar/Customermanagement";
import Materials from "./component/DashboardListBar/Materials";
import Reservationmanagement from "./component/DashboardListBar/Reservationmanagement";
import Reports from "./component/DashboardListBar/Reports";
import Logout from "./component/DashboardListBar/Logout";
import UserAccess from "./component/DashboardListBar/UserAccess";
import Acountmanagement from "./component/DashboardListBar/Acountmanagement";
import Tagsmanagement from "./component/DashboardListBar/Tagsmanagement";
import Systemsetting from "./component/DashboardListBar/Systemsetting";
import Marketing from "./component/DashboardListBar/Marketing";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}>
            <Route index element={<Dashboard />} />
            <Route path="Customermanagement" element={<Customermanagement />} />
            <Route path="Materials" element={<Materials />} />
            <Route
              path="Reservationmanagement"
              element={<Reservationmanagement />}
            />
            <Route path="Reports" element={<Reports />} />
            <Route path="Logout" element={<Logout />} />
            <Route path="UserAccess" element={<UserAccess />} />
            <Route path="Acountmanagement" element={<Acountmanagement />} />
            <Route path="Tagsmanagement" element={<Tagsmanagement />} />
            <Route path="Systemsetting" element={<Systemsetting />} />
            <Route path="Marketing" element={<Marketing />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
