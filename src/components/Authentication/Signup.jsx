import React from "react";
import style from "./Signup.module.css";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup(props) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const [department, setDepartment] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    setRole(""), setDepartment(""), setEmail(""), setUsername("");
    try {
      const response = await axios.post("http://localhost:3000/signup", {
        name: username,
        email: email,
        role: role,
        department: department,
      });
      console.log(response.data);
      if (response.data) {
        navigate("/login");
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-2 col-sm-12 col-12"></div>

          <div
            className="col-xl-6 col-lg-6 col-md-8 col-sm-12 col-12"
            id={style.col}
          >
            <h1>Recursif</h1>

            <p>Fill in the Form to Register an Account with Recursif</p>
            <Form onSubmit={handleSignUp}>
            
            
              <FloatingLabel
                controlId="floatingUsername"
                label="User Name"
                className="mb-3"
              >
                <Form.Control
                  type="username"
                  placeholder="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </FloatingLabel>
          
              <FloatingLabel
                controlId="floatingEmail"
                label="Email"
                className="mb-3"
              >
                <Form.Control
                  type="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingRole"
                label="Role"
                className="mb-3"
              >
                <Form.Control
                  type="role"
                  placeholder="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingDepartment"
                label="Department"
                className="mb-3"
              >
                <Form.Control
                  type="department"
                  placeholder="department"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                />
              </FloatingLabel>

              <button className={style.button} type="submit">
                {" "}
                Sign Up{" "}
              </button>
            </Form>
            <p>
              Have an account, <Link to="/login">Login</Link>{" "}
            </p>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-2 col-sm-12 col-12"></div>
        </div>
      </div>
    </>
  );
}

export default Signup;
