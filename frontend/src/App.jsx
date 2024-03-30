import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home/pages/Home";
import UserList from "./admin/users/pages/UserList";

import Login from "./admin/users/pages/Login";
import Sidebar from "./shared/components/SidebarNav"


function App() {
  return (
    <div> <Sidebar/>
          <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
    </Router>
    </div>

  )
}

export default App