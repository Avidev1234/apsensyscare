import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import "./Login.css";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../Store/Slices/userSlice";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";


const LoginCont = styled(Box)`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10003;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
`;
const BlurImg = styled(Box)`
  width: 100%;
  height: 100%;
  position: absolute;
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;
const LoginBox = styled(Box)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LoginBoxCont = styled(Box)`
  width: 50%;
  height: 70%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10005;
  position: relative;
`;
const LoginLeft = styled(Box)`
  width: 48%;
  height: 100%;
  background-color: white;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LoginRight = styled(Box)`
  width: 48%;
  height: 100%;
  background-color: #916fda;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;
const signupInitialvalue = {
  phone: "",
  email: "",
  password: "",
};
const loginInitialvalue = {
  phone: "",
  password: "",
};

const Login = ({ handelLogin }) => {
  // --------------------------work for password input visiable or hidden and open login /sign up-----------------------------------
  const [showPassword, setShowPassword] = React.useState(false);
  const [showSignup, setShowSignup] = React.useState(true);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const openSignup = (txt) => {
    setShowSignup(txt);
    handleClickShowPassword();
  };
  // --------------------------getting all user inputs for signup_user -----------------------------------
  const [signup, setSignUp] = useState(signupInitialvalue);
  const handleInputs = (values) => {
    setSignUp({ ...signup, [values.target.name]: values.target.value });
  };

  // --------------------------work for signup user-----------------------------------
  const handelSignUp = async (values) => {
    await axios
      .post("/site_user", values)
      .then((req, res) => {
        console.log("done");
        handelLogin(false, 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // --------------------------getting all user inputs for login_user -----------------------------------
  const [login, setLogin] = useState(loginInitialvalue);
  const handleloginInputs = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  // ---------------------------work for login user------------------------------------
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const handelLoginuser = async (values) => {
    try {
      dispatch(fetchUsers(login));
    } catch (error) {
      console.log("hello");
    }
  };

  const SignupSchema = Yup.object().shape({
    phone: Yup.string()
      .matches(/^[6-9]\d{9}$/, {
        message: "Please enter valid number.",
        excludeEmptyString: false,
      })
      .required("Required"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    email: Yup.string().email("Invalid email").required("Required")
  });

  const LoginSchema = Yup.object().shape({
    phone: Yup.string()
      .min(1, "Not a Phone Number!")
      .max(10, "Too Long!")
      .required("Required"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
      .required("Required")
  });

  return (
    <LoginCont>
      <BlurImg></BlurImg>
      <LoginBox>
        <LoginBoxCont>
          <LoginLeft>
            <img alt=""  src="/aspensyscare.png" />
          </LoginLeft>
          <LoginRight>
            <Box
              style={{
                width: "auto",
                top: "13px",
                right: "13px",
                display: "flex",
                position: "absolute",
                justifyContent: "flex-end",
              }}
            >
              <div className="close" onClick={() => handelLogin(false)}>
                <h1>&times;</h1>
              </div>
            </Box>
            {showSignup ? (
              // ----------------------------------login start----------------------------------------------
              <Box
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h2"
                  style={{
                    fontSize: "30px",
                    fontWeight: "700",
                    color: "white",
                  }}
                >
                  Login
                </Typography>
                <div className="form">
                  <div className="card">
                    <div className="face">
                      <Formik
                        initialValues={{
                          phone: "",
                          password: "",
                        }}
                        validationSchema={LoginSchema}
                        onSubmit={(values) => {
                          // same shape as initial values
                          console.log(values);
                          handelLoginuser(values)
                        }}
                      >
                        {({ errors, touched }) => (
                          <Form style={{ width: "90%" }}>
                            <div className="wrap">
                              <Field
                                name="phone"
                                type="text"
                                placeholder="Phone"
                              />
                              {errors.phone && touched.phone ? (
                                <div>{errors.phone}</div>
                              ) : null}
                              <div className="passwordCont">
                                <Field
                                  name="password"
                                  type={showPassword ? "text" : "password"}
                                  placeholder="Password"
                                />
                                <div
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                >
                                  {showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </div>
                              </div>
                              {errors.password && touched.password ? (
                                <div>{errors.password}</div>
                              ) : null}
                              <button type="submit">Submit</button>
                            </div>
                          </Form>
                        )}
                      </Formik>
                    </div>
                    <div className="passwordCont GoogleSignup">
                      <p style={{ marginRight: "5px", color: "white" }}>
                        {" "}
                        Sign up with google
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="white"
                        className="bi bi-google"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <Typography
                  variant="subtitle2"
                  style={{
                    width: "100%",
                    display: "flex",
                    fontSize: "14px",
                    justifyContent: "center",
                    fontWeight: "600",
                    color: "white",
                  }}
                >
                  Don't have an account ?
                  <Typography
                    variant="subtitle2"
                    onClick={() => openSignup(false)}
                    style={{
                      color: "blue",
                      fontWeight: "600",
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                  >
                    Sign Up
                  </Typography>
                </Typography>
                <Typography
                  variant="subtitle2"
                  style={{
                    width: "100%",
                    display: "flex",
                    fontSize: "13px",
                    justifyContent: "center",
                    fontWeight: "500",
                    color: "white",
                  }}
                >
                  Forgot Password
                </Typography>
              </Box>
            ) : (
              // ------------------------------------signup start-------------------------------
              <Box
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h2"
                  style={{
                    fontSize: "30px",
                    fontWeight: "700",
                    color: "white",
                  }}
                >
                  SignUp
                </Typography>
                <div className="form">
                  <div className="card">
                    <div className="face">
                      <Formik
                        initialValues={{
                          phone: "",
                          email: "",
                          password: "",
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={(values) => {
                          // same shape as initial values
                          console.log(values);
                          handelSignUp(values);
                        }}
                      >
                        {({ errors, touched }) => (
                          <Form style={{ width: "90%" }}>
                            <div className="wrap">
                              <Field
                                name="phone"
                                type="number"
                                placeholder="Phone"
                              />
                              {errors.phone && touched.phone ? (
                                <div>{errors.phone}</div>
                              ) : null}
                              <Field
                                name="email"
                                type="email"
                                placeholder="Email"
                              />
                              {errors.email && touched.email ? (
                                <div>{errors.email}</div>
                              ) : null}
                              <div className="passwordCont">
                                <Field
                                  name="password"
                                  type={showPassword ? "password" : "text"}
                                  placeholder="Password"
                                />
                                <div
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                >
                                  {showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </div>
                              </div>
                              {errors.password && touched.password ? (
                                <div>{errors.password}</div>
                              ) : null}
                              <button type="submit">Submit</button>
                            </div>
                          </Form>
                        )}
                      </Formik>
                    </div>
                    <div className="passwordCont GoogleSignup">
                      <p style={{ marginRight: "5px", color: "white" }}>
                        {" "}
                        Sign up with google
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="white"
                        class="bi bi-google"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <Typography
                  variant="subtitle2"
                  style={{
                    width: "100%",
                    display: "flex",
                    fontSize: "14px",
                    justifyContent: "center",
                    fontWeight: "600",
                    color: "white",
                  }}
                >
                  Have an account ?
                  <Typography
                    variant="subtitle2"
                    onClick={() => openSignup(true)}
                    style={{
                      color: "blue",
                      fontWeight: "600",
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                  >
                    Login
                  </Typography>
                </Typography>
                <Typography
                  variant="subtitle2"
                  style={{
                    width: "100%",
                    display: "flex",
                    fontSize: "14px",
                    justifyContent: "center",
                    fontWeight: "600",
                    color: "white",
                  }}
                >
                  Forgot Password
                </Typography>
              </Box>
            )}
          </LoginRight>
        </LoginBoxCont>
      </LoginBox>
    </LoginCont>
    // </Dialog>
  );
};

export default Login;
