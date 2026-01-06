import axios from "axios";
import { useState } from "react";

function AddStudent() {
  const [student, setStudent] = useState({
    name: "",
    rollNo: "",
    department: "",
    year: ""
  });

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/students/add`,
        student,
        {
          headers: {
            Authorization: localStorage.getItem("token")
          }
        }
      );

      alert("Student added successfully");

      setStudent({
        name: "",
        rollNo: "",
        department: "",
        year: ""
      });
    } catch (err) {
      alert("Error adding student");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Add Student</h2>

      <form onSubmit={submit}>
        <input
          className="form-control my-2"
          placeholder="Name"
          value={student.name}
          onChange={(e) =>
            setStudent({ ...student, name: e.target.value })
          }
          required
        />

        <input
          className="form-control my-2"
          placeholder="Roll No"
          value={student.rollNo}
          onChange={(e) =>
            setStudent({ ...student, rollNo: e.target.value })
          }
          required
        />

        <input
          className="form-control my-2"
          placeholder="Department"
          value={student.department}
          onChange={(e) =>
            setStudent({ ...student, department: e.target.value })
          }
          required
        />

        <input
          className="form-control my-2"
          placeholder="Year"
          value={student.year}
          onChange={(e) =>
            setStudent({ ...student, year: e.target.value })
          }
          required
        />

        <button className="btn btn-primary">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudent;
