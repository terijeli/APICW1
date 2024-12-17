import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/dashboard" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signUp" exact element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

// define root component to handle the initial redirect
const Root = () => {
  // Check if token exists in localStorage
  const isAuthenticated = !!localStorage.getItem("token");

  // going to the dashboard if authenticated - if not so, going to login
  return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="/login" />
  );
};

export default App;
