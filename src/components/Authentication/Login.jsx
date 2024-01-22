import React from "react";
import style from "./Login.module.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useNavigate , useLocation} from "react-router-dom";
import axios from "axios";
import { useAuth } from "./auth";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user,setUser] = useState("")

  // Authentication And nagivation to old path
  const navigate = useNavigate();
  const auth = useAuth()
  const location = useLocation()

  const redirectPath = location.state?.path || "/"

  //

  const handleLogin = async (e) => {
    e.preventDefault();
     setUsername("");
    try {
      const response = await axios.post("http://localhost:3000/login", {
        name: username,
       
      });

      if (response.data.role === "employee") {
        auth.login(username)
        navigate(redirectPath,{replace:true});
      } else if (response.data.role === "HR") {
        auth.login(username)
        navigate("/");
      }else {
        console.log("Invalid role:", response.data.role);
        // Add code to handle unexpected role value
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-2 col-sm-12 col-12"></div>
          <div
            className="col-xl-6 col-lg-6 col-md-8 col-sm-12 col-12"
            id={style.col}
          >
            <h1>Recursif</h1>
 
            <p>
              Type your e-mail or phone number to log in or create a Recursif
              account.
            </p>
            <Form onSubmit={handleLogin}>
              <FloatingLabel
                controlId="floatingInput"
                label=" Name"
                className="mb-3"
              >
                <Form.Control
                  type="username"
                  placeholder="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </FloatingLabel>
             

              <button className={style.button} type="submit"> Login </button>
            </Form>
            <p>
              Don't have an account, <Link to="/signup">Sign Up</Link>{" "}
            </p>

            <p className={style.p}>Or</p>
            <button className={style.button2}>Login with Google</button>
            <p className={style.p}>Recursif</p>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-2 col-sm-12 col-12"></div>
        </div>
      </div>
    </>
  );
}

export default Login;
