import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home/pages/Home";
import UserList from "./admin/users/pages/UserList";

import Login from "./admin/users/pages/Login";


function App() {
  return (
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
    </Router>
  )
}

export default App