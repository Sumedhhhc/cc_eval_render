import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/dashboard">
        Student App
      </Link>

      <div>
        <Link className="btn btn-outline-light mx-2" to="/add-student">
          Add Student
        </Link>

        <Link className="btn btn-outline-light mx-2" to="/students">
          All Students
        </Link>

        <button className="btn btn-danger mx-2" onClick={logout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
