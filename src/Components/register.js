import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup"; 
import "./Styles/register.css";
import {  useNavigate } from 'react-router-dom';
import hacker from "./Navbar/hacker.jpg";
import axios from "axios";
const Register = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
    },
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const navigate =useNavigate();
  
  const handleUsernameChange = (e) => {
    setName(e.target.value);
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  const handleConfirmPasswordChange = (e) => {
    setConfirmpassword(e.target.value);
  }
  const submitHandler = (event) => {
    event.preventDefault();
    // const formData = new FormData();
    // formData.append("email", event.target.elements.email.value);
    // formData.append("password", event.target.elements.password.value);
  
    // const data = { email: formData.get("email"), password: formData.get("password") };
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(confirmpassword);

    const data={
      name:name,
      email:email,
      password:password,
      confirmpassword:confirmpassword
    }
    console.log(data);  
    axios.post("http://localhost:8080/add", data)
      .then((response) => {
        console.log(response);
        const jwtToken = response.data.accessToken;
        localStorage.setItem("jwtToken", jwtToken)
        navigate("/Home");


      })
      .catch((error) => {
        console.log(error);
      });
      console.log(email)
  };


  return (
    <div className="home" style={{ backgroundImage: `url(${hacker})` }}>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <h1 className="text-center">Registration</h1>
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                // {...formik.getFieldProps("username")}
                onChange={handleUsernameChange}
              />
              {formik.touched.name && formik.errors.name && (
                <div className="text-danger">{formik.errors.name}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                onChange={handleEmailChange}
                // {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-danger">{formik.errors.email}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                onChange={handlePasswordChange}
                // {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password && (
                <div className="text-danger">{formik.errors.password}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="confirmpassword">ConfirmPassword</label>
              <input
                type="password"
                id="confirmpassword"
                name="confirmpassword"
                className="form-control"
                onChange={handleConfirmPasswordChange}
                // {...formik.getFieldProps("confirmPassword")}
              />
              {formik.touched.confirmpassword &&
                formik.errors.confirmpassword && (
                  <div className="text-danger">
                    {formik.errors.confirmpassword}
                  </div>
                )}
            </div>
            <div className="text-center">
            <button type="submit" className="btn btn-primary">
            Register
              </button>
              
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Register;