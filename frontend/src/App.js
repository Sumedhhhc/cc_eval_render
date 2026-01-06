import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AddStudent from "./pages/AddStudent";
import Students from "./pages/Students";
import Navbar from "./components/Navbar";

function MainContent() {
  const location = useLocation();
  const token = localStorage.getItem("token");

  return (
    <>
      {token && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={token ? <Navigate to="/dashboard" /> : <Login />}
        />

        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={token ? <Dashboard /> : <Navigate to="/" />}
        />

        <Route
          path="/add-student"
          element={token ? <AddStudent /> : <Navigate to="/" />}
        />

        <Route
          path="/students"
          element={token ? <Students /> : <Navigate to="/" />}
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <MainContent />
    </BrowserRouter>
  );
}

export default App;
