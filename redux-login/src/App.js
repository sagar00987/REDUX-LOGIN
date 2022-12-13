import "./App.css";
import Login from "./action/login";
import Users from "./action/user";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="users" element={<Users />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
