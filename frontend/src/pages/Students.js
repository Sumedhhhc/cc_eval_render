import axios from "axios";
import { useEffect, useState } from "react";

function Students() {
  const [students, setStudents] = useState([]);

  const loadStudents = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/students`,
        {
          headers: {
            Authorization: localStorage.getItem("token")
          }
        }
      );
      setStudents(res.data);
    } catch (err) {
      alert("Error loading students");
    }
  };

  const deleteStudent = async (id) => {
    if (!window.confirm("Delete this student?")) return;

    try {
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/api/students/${id}`,
        {
          headers: {
            Authorization: localStorage.getItem("token")
          }
        }
      );
      loadStudents();
    } catch (err) {
      alert("Error deleting student");
    }
  };

  useEffect(() => {
    loadStudents();
  }, []);

  return (
    <div className="container mt-5">
      <h2>All Students</h2>

      <table className="table table-bordered table-striped mt-3">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Department</th>
            <th>Year</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center">
                No students found
              </td>
            </tr>
          ) : (
            students.map((s) => (
              <tr key={s._id}>
                <td>{s.name}</td>
                <td>{s.rollNo}</td>
                <td>{s.department}</td>
                <td>{s.year}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteStudent(s._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Students;
